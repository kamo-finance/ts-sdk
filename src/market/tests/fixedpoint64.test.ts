import { describe } from 'node:test'
import { expect, test } from 'vitest'
import { FixedPoint64 } from '../fixedpoint64';
import { expFixedPoint64 } from '../../transaction';

describe("FixedPoint64 functions", () => {
  test("exp", async () => {
    const fixedPoint64 = FixedPoint64.Exp(FixedPoint64.CreateFromU128(BigInt(1)));
    console.log(fixedPoint64.value);
    const expectedValue = await expFixedPoint64(BigInt(1));
    expect(fixedPoint64.value).toBe(expectedValue.value);
  });
})