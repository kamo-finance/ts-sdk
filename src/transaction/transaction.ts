import { Transaction } from '@mysten/sui/transactions';
import { createNewState } from '../kamo_generated/hasui_wrapper/wrapper/functions';
import { createFromRawValue, createFromU128 } from '../kamo_generated/legato-math/fixed-point64/functions';
import { suiClient } from '../client/client';
import { PUBLISHED_AT as HASUI_WRAPPER_PACKAGE_ID } from '../kamo_generated/hasui_wrapper';
import { FACTORY } from './const';
import { FixedPoint64 as MoveFixedPoint64 } from '../kamo_generated/legato-math/fixed-point64/structs';
import BigNumber from 'bignumber.js';
import { compressSuiAddress, compressSuiType } from '../kamo_generated/_framework/util';
import { exp } from '../kamo_generated/legato-math/math-fixed64/functions';
import { ln, nthRoot } from '../kamo_generated/legato-math/legato-math/functions';
import { FixedPoint64 } from '../market/fixedpoint64';
import { getExchangeRatePtToAsset } from '../kamo_generated/kamo/amm/functions';

export interface AddLiquidityParams {
    amountPT: number;
    amountSY: number;
    sender: string;
    tx?: Transaction;
}

export interface RemoveLiquidityParams {
    amountLP: number;
    sender: string;
    tx?: Transaction;
}

export interface NewStateParams {
    expiry: bigint;
    scalarRoot: bigint;
    initialAnchor: bigint;
    lnFeeRateRoot: bigint;
    owner: string;
}

export interface MintParams {
    sy_amount_in: bigint;
    sender: string;
    tx?: Transaction;
}

export interface RedeemBeforeMaturityParams {
    ptAmountBurned: bigint;
    sender: string;
    tx?: Transaction;
}

export interface RedeemAfterMaturityParams {
    ptAmountBurned: bigint;
    sender: string;
    tx?: Transaction;
}

export interface SwapPtForSyParams {
    ptAmount: bigint;
    sender: string;
    tx?: Transaction;
}

export interface SwapSyForPtParams {
    syAmount: bigint;
    sender: string;
    tx?: Transaction;
}

export interface SwapSyForExactPtParams {
    syAmount: bigint;
    ptAmount: bigint;
    sender: string;
    tx?: Transaction;
}

export abstract class KamoTransaction {
    abstract mint(params: MintParams): Promise<Transaction>;
    abstract redeemBeforeMaturity(params: RedeemBeforeMaturityParams): Promise<Transaction>;
    abstract redeemAfterMaturity(params: RedeemAfterMaturityParams): Promise<Transaction>;
    abstract addLiquidity(params: AddLiquidityParams): Promise<Transaction>;
    abstract removeLiquidity(params: RemoveLiquidityParams): Promise<Transaction>;
    abstract swapPtForSy(params: SwapPtForSyParams): Promise<Transaction>;
    abstract swapSyForPt(params: SwapSyForPtParams): Promise<Transaction>;
    abstract swapSyForExactPt(params: SwapSyForExactPtParams): Promise<Transaction>;
    abstract getCurrentExchangeRate(): Promise<FixedPoint64>;

    static async NewState(params: NewStateParams) {
        const tx = new Transaction();
        const objects = await suiClient.getOwnedObjects({
            owner: params.owner,
            options: {
                showType: true,
            },
            filter: {
                StructType: `0x2::coin::TreasuryCap<${HASUI_WRAPPER_PACKAGE_ID}::PT::PT>`
            }
        });
        const treasuryCap = objects.data[0];
        if (!treasuryCap || !treasuryCap.data) {
            throw new Error(`TreasuryCap not found`);
        }

        createNewState(tx, {
            factory: FACTORY,
            treasury: treasuryCap.data.objectId,
            expiry: params.expiry,
            scalarRoot: createFromRawValue(tx, params.scalarRoot),
            initialAnchor: createFromRawValue(tx, params.initialAnchor),
            lnFeeRateRoot: createFromRawValue(tx, params.lnFeeRateRoot),
            clock: tx.object.clock()
        });
        return tx;  
    }
}

export const expFixedPoint64 = async (rt: bigint) => {
    const tx = new Transaction();
    exp(tx, createFromU128(tx, rt));
    const inspectResult = await suiClient.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: "0xda64a21e23f5943e7774d47d1b15eb60e4a8dee1d55be0487dad2292e2b51eae"
    });
    const expResult = inspectResult.results?.[1].returnValues?.[0]?.[0];
    const fixedPoint64 = MoveFixedPoint64.fromBcs(Uint8Array.from(expResult ?? []));
    return fixedPoint64;
}

export const nthRootFixedPoint64 = async (value: bigint, n: bigint) => {
    const tx = new Transaction();
    nthRoot(tx, {
        x: createFromU128(tx, value),
        n,
    });
    const inspectResult = await suiClient.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: "0xda64a21e23f5943e7774d47d1b15eb60e4a8dee1d55be0487dad2292e2b51eae"
    });
    const nthRootResult = inspectResult.results?.[1].returnValues?.[0]?.[0];
    const nthRootValue = MoveFixedPoint64.fromBcs(Uint8Array.from(nthRootResult ?? []));
    return nthRootValue;
}

export const lnFixedPoint64 = async (x: bigint) => {
    const tx = new Transaction();
    ln(tx, createFromU128(tx, x));
    const inspectResult = await suiClient.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: "0xda64a21e23f5943e7774d47d1b15eb60e4a8dee1d55be0487dad2292e2b51eae"
    });
    const lnResult = inspectResult.results?.[1].returnValues?.[0]?.[0];
    const fixedPoint64 = MoveFixedPoint64.fromBcs(Uint8Array.from(lnResult ?? []));
    return fixedPoint64;
}

interface ExchangeRatePtToAssetParams {
    totalPt: bigint;
    totalAsset: bigint;
    rateScalar: FixedPoint64;
    rateAnchor: FixedPoint64;
    ptAmount: bigint;
    sell: boolean;
}

export const exchangeRatePtToAsset = async (params: ExchangeRatePtToAssetParams) => {
    const tx = new Transaction();
    getExchangeRatePtToAsset(tx, {
        totalPt: params.totalPt,
        totalAsset: params.totalAsset,
        rateScalar: createFromRawValue(tx, params.rateScalar.value),
        rateAnchor: createFromRawValue(tx, params.rateAnchor.value),
        ptAmount: params.ptAmount,
        sellPt: params.sell,
    });
    const inspectResult = await suiClient.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: "0xda64a21e23f5943e7774d47d1b15eb60e4a8dee1d55be0487dad2292e2b51eae"
    });
    const exchangeRateResult = inspectResult.results?.[1].returnValues?.[0]?.[0];
    const exchangeRate = MoveFixedPoint64.fromBcs(Uint8Array.from(exchangeRateResult ?? []));
    return exchangeRate;
}