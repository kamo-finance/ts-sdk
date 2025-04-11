import { coinWithBalance, Transaction } from "@mysten/sui/transactions";
import { AddLiquidityParams, RedeemBeforeMaturityParams, KamoTransaction, MintParams, RemoveLiquidityParams, SwapPtForSyParams, SwapSyForPtParams, SwapSyForExactPtParams, SwapYoForSyParams, NewStateParams } from "../transaction";
import { addLiquidity, borrowPt, createNewState, getExchangeRate, mint, redeemAfterMaturity, redeemBeforeMaturity, refundPt, removeLiquidity, swapExactPtForSy, swapExactPtForSyWithHotPotato, swapSyForExactPtWithHotPotato } from "../../kamo_generated/hasui_wrapper/wrapper/functions";
import { State } from "../../kamo_generated/hasui_wrapper/wrapper/structs";
import { FACTORY, STATE_ADDRESS_MAP, SUPPORTED_MARKETS } from "../../const";
import { kamoClient, suiClient } from "../../client/client";
import { PUBLISHED_AT as KAMO_PACKAGE } from "../../kamo_generated/kamo";
import { merge, split, swapSyForExactPt } from "../../kamo_generated/hasui_wrapper/wrapper/functions";
import { binarySearchPtAmount, getSyAmountNeedForExactPt, improvedBinarySearchPtAmount, mergeYieldObjects } from "../../utils";
import { FixedPoint64 as MoveFixedPoint64 } from "../../kamo_generated/legato-math/fixed-point64/structs";
import { FixedPoint64 } from "../../utils/fixedpoint64";
import { YieldObject } from "../../kamo_generated/kamo/yield-object/structs";
import { PUBLISHED_AT as HASUI_WRAPPER_PACKAGE_ID } from '../../kamo_generated/hasui_wrapper/';
import { createFromRawValue } from "../../kamo_generated/legato-math/fixed-point64/functions";

const HAEDAL_STAKING = "0x47b224762220393057ebf4f70501b6e657c3e56684737568439a04f80849b2ca";
const DEFAULT_STATE_ID = STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.HASUI)!;

export class HasuiTransaction extends KamoTransaction {
    async mint(params: MintParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        if (Date.now() > state.market.expiry) {
            throw new Error("Market expired");
        }
        if (!params.coin && !params.sy_amount_in) {
            throw new Error("Either coin or sy_amount_in must be provided");
        }
        const sy = coinWithBalance({
            type: state.market.$typeArgs[1],
            balance: params.sy_amount_in ?? 0
        });
        const [pt, yield_object] = mint(tx, {
            state: DEFAULT_STATE_ID,
            hasuiCoinIn: params.coin || sy,
            staking: HAEDAL_STAKING,
            clock: tx.object.clock()
        });
        tx.transferObjects([pt, yield_object], params.sender);
        return tx;
    }

    async redeemBeforeMaturity(params: RedeemBeforeMaturityParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        const pt = coinWithBalance({
            type: state.market.$typeArgs[0],
            balance: params.ptAmountBurned
        }); 
        const yieldObjects = await kamoClient.getYieldObjects({
            stateId: DEFAULT_STATE_ID,
            owner: params.sender
        });
        for (let i = 1; i < yieldObjects.length; i++) {
            const currentYieldObject = yieldObjects[i];
            merge(tx,             
            {
                state: DEFAULT_STATE_ID,
                self: yieldObjects[0].id,
                yieldObject: currentYieldObject.id,
                staking: HAEDAL_STAKING,
            })
        }
        const splitedYieldObject = split(tx, 
        {
            state: DEFAULT_STATE_ID,
            yieldObject: yieldObjects[0].id,
            amount: params.ptAmountBurned
        });
        const sy = redeemBeforeMaturity(tx, {
            state: DEFAULT_STATE_ID,
            ptCoinIn: pt,
            yieldObject: splitedYieldObject,
            staking: HAEDAL_STAKING,
            clock: tx.object.clock()
        });
        tx.transferObjects([sy], params.sender);
        return tx;
    }

    async redeemAfterMaturity(params: RedeemBeforeMaturityParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        const pt = coinWithBalance({
            type: state.market.$typeArgs[0],
            balance: params.ptAmountBurned
        });
        const sy = redeemAfterMaturity(tx, {
            state: DEFAULT_STATE_ID,
            ptCoinIn: pt,
            staking: HAEDAL_STAKING,
            clock: tx.object.clock()
        });
        tx.transferObjects([sy], params.sender);
        return tx;
    }

    async addLiquidity(params: AddLiquidityParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        const ptCoin = coinWithBalance({
            type: state.market.$typeArgs[0],
            balance: params.amountPT
        });
        const syCoin = coinWithBalance({
            type: state.market.$typeArgs[1],
            balance: params.amountSY
        });
        const lp = addLiquidity(
            tx,
            {
                state: DEFAULT_STATE_ID,
                ptCoin,
                syCoin,
                staking: HAEDAL_STAKING,
                clock: tx.object.clock()
            }
        )
        tx.transferObjects([lp], params.sender);
        return tx;
    }

    async removeLiquidity(params: RemoveLiquidityParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.HASUI)!);
        const lp = coinWithBalance({
            type: `${KAMO_PACKAGE}::amm::LP<${state.market.$typeArgs[0]}, ${state.market.$typeArgs[1]}>`,
            balance: params.amountLP
        });
        const [pt, sy] = removeLiquidity(
            tx,
            {
                state: STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.HASUI)!,
                lp,
            }
        )
        tx.transferObjects([pt, sy], params.sender);
        return tx;
    }

    async swapPtForSy(params: SwapPtForSyParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.HASUI)!);
        const pt = coinWithBalance({
            type: state.market.$typeArgs[0],
            balance: params.ptAmount
        });
        const sy = swapExactPtForSy(tx, {
            state: DEFAULT_STATE_ID,
            ptCoin: pt,
            staking: HAEDAL_STAKING,
            clock: tx.object.clock()
        });
        tx.transferObjects([sy], params.sender);
        return tx;
    }

    async swapSyForPt(params: SwapSyForPtParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        const sy = coinWithBalance({
            type: state.market.$typeArgs[1],
            balance: params.syAmount
        });
        const ptAmount = await improvedBinarySearchPtAmount(params.syAmount, await this.getCurrentExchangeRate());
        const pt = swapSyForExactPt(tx, {
            state: DEFAULT_STATE_ID,
            syCoin: sy,
            staking: HAEDAL_STAKING,
            ptAmount,
            clock: tx.object.clock()
        });
        tx.transferObjects([pt], params.sender);
        return tx;
    }

    async swapSyForExactPt(params: SwapSyForExactPtParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        const sy = coinWithBalance({
            type: state.market.$typeArgs[1],
            balance: params.syAmount
        });
        const pt = swapSyForExactPt(tx, {
            state: DEFAULT_STATE_ID,
            syCoin: sy,
            staking: HAEDAL_STAKING,
            ptAmount: params.ptAmount,
            clock: tx.object.clock()
        });
        tx.transferObjects([pt], params.sender);
        return tx;
    }

    async getCurrentExchangeRate(): Promise<FixedPoint64> {
        const tx = new Transaction();
        getExchangeRate(tx, HAEDAL_STAKING);
        const result = await suiClient.devInspectTransactionBlock({
            transactionBlock: tx,
            sender: "0xda64a21e23f5943e7774d47d1b15eb60e4a8dee1d55be0487dad2292e2b51eae"
        });
        const exchangeRate = result.results?.[0].returnValues?.[0]?.[0];
        const fixedPoint64 = MoveFixedPoint64.fromBcs(Uint8Array.from(exchangeRate ?? []));
        return new FixedPoint64(fixedPoint64.value);
    }

    async swapYoForSy(params: SwapYoForSyParams) {
        const yieldObjects = await kamoClient.getYieldObjects({
            stateId: DEFAULT_STATE_ID,
            owner: params.sender
        });
        const tx = params.tx || new Transaction();
        const yo = mergeYieldObjects({
            sender: params.sender,
            desiredAmount: params.yoAmount,
            yieldObjects,
            splitFunc: (yieldObject, amount) => {
                return split(tx, {
                    state: DEFAULT_STATE_ID,
                    yieldObject: yieldObject.id,
                    amount  
                });
            },
            mergeFunc: (yieldObjectA, yieldObjectB) => {
                return merge(tx, {
                    state: DEFAULT_STATE_ID,
                    self: yieldObjectA instanceof YieldObject ? yieldObjectA.id : yieldObjectA,
                    yieldObject: yieldObjectB instanceof YieldObject ? yieldObjectB.id : yieldObjectB,
                    staking: HAEDAL_STAKING
                });
            }
        });
        const [hotPotato, ptCoin] = borrowPt(tx, {
            state: DEFAULT_STATE_ID,
            ptAmount: params.yoAmount,
            clock: tx.object.clock()
        });
        const sy = redeemBeforeMaturity(tx, {
            state: DEFAULT_STATE_ID,
            ptCoinIn: ptCoin,
            yieldObject: yo instanceof YieldObject ? yo.id : yo,
            staking: HAEDAL_STAKING,
            clock: tx.object.clock()
        });
        const syAmount = await getSyAmountNeedForExactPt(params.yoAmount, await this.getCurrentExchangeRate());
        const syCoinIn = tx.splitCoins(sy, [syAmount]);
        const [syRemain, pt, hotPotato2] = swapSyForExactPtWithHotPotato(tx, {
            state: DEFAULT_STATE_ID,
            hotPotato,
            syCoin: syCoinIn,
            staking: HAEDAL_STAKING,
            ptAmount: BigInt(params.yoAmount),
            clock: tx.object.clock()
        });
        refundPt(tx, {
            state: DEFAULT_STATE_ID,
            hotPotato: hotPotato2,
            ptCoin: pt,
        });
        tx.transferObjects([sy, syRemain], params.sender);
        return tx;
    }

    async newState(params: NewStateParams) {
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