import { Transaction } from "@mysten/sui/transactions";
import { AddLiquidityParams, IKamoTransaction } from "../transaction";
export class HaedalTransaction implements IKamoTransaction {
    AddLiquidity(params: AddLiquidityParams) {
        const tx = new Transaction();
        return tx;
    }
}