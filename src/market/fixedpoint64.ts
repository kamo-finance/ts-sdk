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


export class FixedPoint64 {
  value: bigint;

  constructor(value: bigint) {
    this.value = value;
  }

  static CreateFromU128(value: bigint): FixedPoint64 {
    const scaled = value << BigInt(64);
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
    (power << shiftLong) + taylor1 + taylor2 / BigInt(2) + taylor3 / BigInt(6) + taylor4 / BigInt(24) + taylor5 / BigInt(120) + taylor6 / BigInt(720);
    console.log("rt", rt);
    console.log("ShiftLong: ", shiftLong);
    console.log("remainder: ", remainder);
    console.log("exponent: ", exponent);
    console.log("x: ", x);
    console.log("power: ", power);
    return new FixedPoint64(power);
  }

} 