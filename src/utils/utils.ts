import { KamoTransaction } from "../transaction";
import { STATE_ADDRESS_MAP, SUPPORTED_MARKETS } from "../const";
import { SimulateSwapSyForExactPtParams, YieldMarket } from "../market/market";
import { FixedPoint64 } from "./fixedpoint64";
import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { YieldObject } from "../kamo_generated/kamo/yield-object/structs";
import { TransactionResult } from "@mysten/sui/transactions";

// TODO: need to improve this function for better performance, now call dryRunTransactionBlock so it's slow
export const binarySearchPtAmount = async (tx: KamoTransaction, syAmount: bigint): Promise<bigint> => {
    const suiClient = new SuiClient({
        url: getFullnodeUrl("mainnet"),
    });
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

export const improvedBinarySearchPtAmount = async (syAmount: bigint, exchangeRate: FixedPoint64): Promise<bigint> => {
    const yieldMarket = await YieldMarket.GetFromState({
        stateId: STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.HASUI)!,
    });
    let left = BigInt(0);
    let right = yieldMarket.market.totalPt;
    const now = Date.now();
    while (right - left > 1) {
        const mid = (left + right) / BigInt(2);
        try {
            const {
                netSyToMarket,
                netSyFee
            } = yieldMarket.executeSellSy({
                ptAmount: mid,
                exchangeRate,
                now,
            });
            if (syAmount >= netSyToMarket + netSyFee) {
                left = mid;
            } else {
                right = mid;
            }
        } catch (e) {
            right = mid;
        }
    }
    const {
        netSyToMarket,
        netSyFee
    } = yieldMarket.executeSellSy({
        ptAmount: left + BigInt(1),
        exchangeRate,
        now,
    });
    return left;
}

export const getSyAmountNeedForExactPt = async (ptAmount: bigint, exchangeRate: FixedPoint64): Promise<bigint> => {
    const yieldMarket = await YieldMarket.GetFromState({
        stateId: STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.HASUI)!,
    });
    const now = Date.now();
    const {
        netSyToMarket,
        netSyFee
    } = yieldMarket.executeSellSy({
        ptAmount,
        exchangeRate,
        now,
    });
    return netSyToMarket + netSyFee;
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

export interface MergeYieldObjectsParams {
    sender: string;
    desiredAmount: bigint;
    yieldObjects: YieldObject<any, any>[];
    splitFunc: (yieldObject: YieldObject<any, any>, amount: bigint) => TransactionResult;
    mergeFunc: (yieldObjectA: YieldObject<any, any> | TransactionResult, yieldObjectB: YieldObject<any, any> | TransactionResult) => TransactionResult;
}

export const mergeYieldObjects = (params: MergeYieldObjectsParams) => {
    const yieldObjects = params.yieldObjects;
    if (yieldObjects.length === 0) {
        throw new Error("No yield object found");
    }
    let neededAmount = params.desiredAmount;
    if (yieldObjects[0].amount > neededAmount) {
        return params.splitFunc(yieldObjects[0], neededAmount);;
    }
    let object: YieldObject<any, any> | TransactionResult = yieldObjects[0];
    neededAmount -= yieldObjects[0].amount;
    for (let i = 1; i < yieldObjects.length && neededAmount > 0; i++) {
        const yieldObject = yieldObjects[i];
        if (yieldObject.amount > neededAmount) {
            const yo = params.splitFunc(yieldObject, neededAmount);
            params.mergeFunc(object, yo);
            break;
        } else {
            if (i !== 0) {
                params.mergeFunc(object, yieldObject);
            }
            neededAmount -= yieldObject.amount;
        }
    }
    return object;
}