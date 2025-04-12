import { expect, test, describe } from 'vitest'
import { newKamoTransaction } from '../../transaction';
import { binarySearchPtAmount, improvedBinarySearchPtAmount } from '../utils';
import { suiClient } from '../../client';

describe("Binary functions", () => {
    test("equals", async () => {
        const ptAmount = Math.floor(Math.random() * 1000);
        const kamoTx = newKamoTransaction({
            market: "HASUI",
        });
        const exchangeRate = await kamoTx.getCurrentExchangeRate();
        const ptAmount1 = await improvedBinarySearchPtAmount(BigInt(ptAmount), exchangeRate);
        console.log(ptAmount1);
        const ptAmount2 = await binarySearchPtAmount(kamoTx, BigInt(ptAmount));
        expect(ptAmount1).toBe(ptAmount2);
    }, 100000);
})