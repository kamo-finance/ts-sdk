import { N } from "vitest/dist/chunks/reporters.66aFHiyX";
import { ln } from "./kamo_generated/legato-math/legato-math/functions";

const LN2 = BigInt("12786308645202655660");
const BIGFACTOR = BigInt("22045359733108027");
const ROOTTWO = BigInt("18468802611690918839");
const EPS = BigInt("219071715585908898");


// base and result are 64-bit fixed-point numbers
function powRaw(base: bigint, exponent: bigint): bigint {
  let result = BigInt(1) << BigInt(64); 
  while (exponent > BigInt(0)) {
    if (exponent & BigInt(1)) {
      result = result * base >> BigInt(64);
    }
    base = base * base >> BigInt(64);
    exponent = exponent >> BigInt(1);
  }
  return result;
}

function floorLog2(x: bigint): bigint {
  let result = BigInt(0);
  let n = BigInt(64);
  while (n > 0) {
    if (x >= BigInt(1) << BigInt(n)) {
      x = x >> BigInt(n);
      result = result + BigInt(n);
    }
    n = n >> BigInt(1);
  };
  return result;
}

export class FixedPoint64 {
  value: bigint;

  constructor(value: bigint) {
    this.value = value;
  }

  static CreateFromU128(value: bigint): FixedPoint64 {
    const scaled = value << BigInt(64);
    return new FixedPoint64(scaled);
  }

  static CreateFromRational(numerator: bigint, denominator: bigint): FixedPoint64 {
    const scaled = (numerator << BigInt(64)) / denominator;
    return new FixedPoint64(scaled);
  }

  static Exp(rt: FixedPoint64): FixedPoint64 {
    const value = rt.value;
    const shiftLong = value / LN2;
    const remainder = value % LN2;
    const exponent = remainder / BIGFACTOR;
    const x = remainder % BIGFACTOR;
    let power = powRaw(ROOTTWO, exponent);
    power = power - ((power * EPS * exponent) >> BigInt(128));
    const taylor1 = (power * x) >> (BigInt(64) - shiftLong);
    let taylor2 = (taylor1 * x) >> BigInt(64);
    let taylor3 = (taylor2 * x) >> BigInt(64);
    let taylor4 = (taylor3 * x) >> BigInt(64);
    let taylor5 = (taylor4 * x) >> BigInt(64);
    let taylor6 = (taylor5 * x) >> BigInt(64);
    const res = (power << shiftLong) + taylor1 + taylor2 / BigInt(2) + taylor3 / BigInt(6) + taylor4 / BigInt(24) + taylor5 / BigInt(120) + taylor6 / BigInt(720);
    return new FixedPoint64(res);
  }

  floor(): bigint {
    return this.value >> BigInt(64);
  }

  ceil(): bigint {
    const floor = this.floor() << BigInt(64);
    if (this.value == floor) {
      return this.floor();
    }
    const val = floor + BigInt(1) << BigInt(64);
    return val >> BigInt(64); 
  }

  round(): bigint {
    const floor = this.floor() << BigInt(64);
    const boundary = floor + (BigInt(1) << BigInt(63));
    if (this.value >= boundary) {
      return this.ceil();
    }
    return this.floor();
  }

  absolute(x: FixedPoint64): FixedPoint64 {
    if (this.value >= x.value) {
      return new FixedPoint64(this.value - x.value);
    } else {
      return new FixedPoint64(x.value - this.value);
    }
  }

  mul(x: FixedPoint64): FixedPoint64 {
    return new FixedPoint64((this.value * x.value) >> BigInt(64));
  }

  div(x: FixedPoint64): FixedPoint64 {
    return new FixedPoint64((this.value << BigInt(64)) / x.value);
  }

  muldivU128U128(a: bigint, b: bigint): FixedPoint64 {
    return new FixedPoint64((this.value * a) / b);
  }

  addDivFixed64(a: FixedPoint64, b: FixedPoint64): FixedPoint64 {
    return new FixedPoint64(this.value + FixedPoint64.CreateFromRational(a.value, b.value).value);
  }

  subDivFixed64(a: FixedPoint64, b: FixedPoint64): FixedPoint64 {
    return new FixedPoint64(this.value - FixedPoint64.CreateFromRational(a.value, b.value).value);
  }

  getLog2_64(): FixedPoint64 {
    let x = this.value;
    let integerPart = floorLog2(x);
    if (x >= (BigInt(1) << BigInt(63))) {
      x = x >> (integerPart - BigInt(63));
    } else {
      x = x << (BigInt(63) - integerPart);
    }
    let frac = BigInt(0);
    let delta = BigInt(1) << BigInt(63);
    while (delta != BigInt(0)) {
      x = (x * x) >> BigInt(63);
      if (x >= (BigInt(2) << BigInt(63))) {
        frac = frac + delta;
        x = x >> BigInt(1);
      }
      delta = delta >> BigInt(1);
    }
    return new FixedPoint64((integerPart << BigInt(64)) + frac);
  }

  power(e: FixedPoint64): FixedPoint64 {
    if (e.value === BigInt(0)) {
      return FixedPoint64.CreateFromU128(BigInt(1));
    } else if (e.value === FixedPoint64.CreateFromU128(BigInt(1)).value) {
      return this;
    } else if (e.value < FixedPoint64.CreateFromU128(BigInt(1)).value) {
      const integerPart = e.floor();
      const fractionalPart = FixedPoint64.CreateFromU128(e.value - (integerPart << BigInt(64)));
      const result = powRaw(fractionalPart.value, integerPart);
      if (fractionalPart.value === BigInt(0)) {
        return new FixedPoint64(result);
      } else {
        const nth = FixedPoint64.CreateFromU128(BigInt(1)).value * FixedPoint64.CreateFromU128(BigInt(1)).value / fractionalPart.value;
        const nthRounded = new FixedPoint64(nth).round();
        const fractionalResult = this.nthRoot(nthRounded);
        return new FixedPoint64(result * fractionalResult.value >> BigInt(64));        
      }
    } else {
      let ln_x_times_y = e.value * this.ln().value >> BigInt(64);
      return FixedPoint64.Exp(new FixedPoint64(ln_x_times_y));
    }
  } 

  ln(): FixedPoint64 {
    const log2E = new FixedPoint64(BigInt("26613026195707766742"));
    const afterLog2 = this.getLog2_64();
    const fixed2 = FixedPoint64.CreateFromU128(BigInt(64));
    const afterSutraction = afterLog2.absolute(fixed2).value;
    return new FixedPoint64((afterSutraction << BigInt(64)) / log2E.value);
  }

  nthRoot(n: bigint): FixedPoint64 {
    if (n === BigInt(0)) {
      return FixedPoint64.CreateFromU128(BigInt(1));
    } else {
      let guess = FixedPoint64.CreateFromRational(BigInt(1), BigInt(2));
      let epsilon = FixedPoint64.CreateFromRational(BigInt(1), BigInt(1000));
      let delta = FixedPoint64.CreateFromRational(BigInt("18446744073709551615"), BigInt(1));
      while (delta.value > epsilon.value) {
        let xn = powRaw(guess.value, n);
        let derivative = FixedPoint64.CreateFromU128(n).value * powRaw(guess.value, n - BigInt(1)) >> BigInt(64);
        if (xn >= this.value) {
          delta.value = ((xn - this.value) << BigInt(64)) / derivative;
          guess.value = guess.value - delta.value;
        } else {
          delta.value = ((this.value - xn) << BigInt(64)) / derivative;
          guess.value = guess.value + delta.value;
        }
      }
      return guess;
    }
  }
} 