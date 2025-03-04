import { KamoTransaction } from "./transaction";
import { suiClient } from "../client";
import { STATE_ADDRESS_MAP, SUPPORTED_MARKETS } from "./const";

// TODO: need to improve this function for better performance, now call dryRunTransactionBlock so it's slow
export const binarySearchPtAmount = async (tx: KamoTransaction, syAmount: bigint): Promise<bigint> => {
    let left = BigInt(0);
    let right = BigInt(1) << BigInt(64);
    while (right - left > 1) {  
        const mid = (left + right) / BigInt(2);
        const txb = await tx.swapSyForExactPt({
            syAmount,
            ptAmount: mid,
            sender: "0x058a4e1ff160aaaab009a9e700d397e386ba4c0efad05139315e50bfc2217dde",
        });
        txb.setGasBudget(100000000);
        txb.setSender("0x058a4e1ff160aaaab009a9e700d397e386ba4c0efad05139315e50bfc2217dde");
        const builtTx = await txb.build({
            client: suiClient,
        });
        const result = await suiClient.dryRunTransactionBlock({
            transactionBlock: builtTx
        });
        if (result.effects.status.status === "success") {
            left = mid;
        } else {
            right = mid;
        }
    }
    return left;
}

export const mappingState = (stateId: string): SUPPORTED_MARKETS => {
    let type: SUPPORTED_MARKETS = SUPPORTED_MARKETS.NONE;
    STATE_ADDRESS_MAP.forEach((value, key) => {
        if (value === stateId) {
            type = key;
        }
    });
    if (type === SUPPORTED_MARKETS.NONE) {
        throw new Error("State not found");
    }
    return type;
}