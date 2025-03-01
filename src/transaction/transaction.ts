import { Transaction } from '@mysten/sui/transactions';
import { ADDRESS_MAP, FUNCTION_MAP } from './const';

export class KamoTransaction {
    static addLiquidity(): Transaction {
        const tx = new Transaction();
        tx.moveCall({
            target: `${ADDRESS_MAP.KAMO_PACKAGE}::${FUNCTION_MAP.AddLiquidity}`,
        });
        return tx;
    }
}