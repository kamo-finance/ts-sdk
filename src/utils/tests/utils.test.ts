import { expect, test, describe } from 'vitest'
import { newKamoTransaction } from '../../transaction';
import { binarySearchPtAmount, improvedBinarySearchPtAmount } from '../utils';
import { suiClient } from '../../client';
import { STATE_ADDRESS_MAP, SUPPORTED_MARKETS } from '../../const';
describe("Binary functions", () => {
    test("equals", async () => {
        const ptAmount = Math.floor(Math.random() * 1000);
        const kamoTx = newKamoTransaction({
            market: "KUSDC",
        });
        const exchangeRate = await kamoTx.getSyExchangeRate();
        const ptAmount1 = await improvedBinarySearchPtAmount(STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.KUSDC)!, BigInt(ptAmount), exchangeRate);
        console.log(ptAmount1);
        const ptAmount2 = await binarySearchPtAmount(kamoTx, BigInt(ptAmount));
        expect(ptAmount1).toBe(ptAmount2);
    }, 100000);
})