import { describe } from 'node:test'
import { expect, test } from 'vitest'
import { FixedPoint64 } from '../fixedpoint64';
import { expFixedPoint64, lnFixedPoint64, nthRootFixedPoint64 } from '../../transaction';

describe("FixedPoint64 functions", () => {
  test("ln", async () => {
    const fixedPoint64 = FixedPoint64.CreateFromU128(BigInt(1));
    const ln = fixedPoint64.ln();
    expect(ln.value).toBe(BigInt(0));

    const fixedPoint64_2 = FixedPoint64.CreateFromU128(BigInt(2));
    const ln_2 = fixedPoint64_2.ln();
    const expectedValue = await lnFixedPoint64(BigInt(2));
    expect(ln_2.value).toBe(expectedValue.value);
  });

  test("nthRoot", async () => {
    const fixedPoint64 = FixedPoint64.CreateFromU128(BigInt(1));
    const nthRoot = fixedPoint64.nthRoot(BigInt(2));
    const expectedValue = await nthRootFixedPoint64(BigInt(1), BigInt(2));
    expect(nthRoot.value).toBe(expectedValue.value);
  });

  test("exp", async () => {
    const fixedPoint64 = FixedPoint64.Exp(FixedPoint64.CreateFromU128(BigInt(1)));
    const expectedValue = await expFixedPoint64(BigInt(1));
    expect(fixedPoint64.value).toBe(expectedValue.value);
  });
})