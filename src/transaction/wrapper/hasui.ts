import { coinWithBalance, Transaction } from "@mysten/sui/transactions";
import { AddLiquidityParams, RedeemBeforeMaturityParams, KamoTransaction, MintParams, RemoveLiquidityParams, SwapPtForSyParams, SwapSyForPtParams, SwapSyForExactPtParams } from "../transaction";
import { addLiquidity, getExchangeRate, mint, redeemAfterMaturity, redeemBeforeMaturity, removeLiquidity, swapExactPtForSy } from "../../kamo_generated/hasui_wrapper/wrapper/functions";
import { State } from "../../kamo_generated/hasui_wrapper/wrapper/structs";
import { STATE_ADDRESS_MAP, SUPPORTED_MARKETS } from "../const";
import { kamoClient, suiClient } from "../../client/client";
import { PUBLISHED_AT as KAMO_PACKAGE } from "../../kamo_generated/kamo";
import { merge, split, swapSyForExactPt } from "../../kamo_generated/hasui_wrapper/wrapper/functions";
import { binarySearchPtAmount } from "../utils";

const HAEDAL_STAKING = "0x47b224762220393057ebf4f70501b6e657c3e56684737568439a04f80849b2ca";
const DEFAULT_STATE_ID = STATE_ADDRESS_MAP.get(SUPPORTED_MARKETS.HASUI)!;

export class HasuiTransaction extends KamoTransaction {
    async mint(params: MintParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, DEFAULT_STATE_ID);
        if (Date.now() > state.market.expiry) {
            throw new Error("Market expired");
        }
        const sy = coinWithBalance({
            type: state.market.$typeArgs[1],
            balance: params.sy_amount_in
        });
        const [pt, yield_object] = mint(tx, {
            state: DEFAULT_STATE_ID,
            hasuiCoinIn: sy,
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
        const ptAmount = await binarySearchPtAmount(this, params.syAmount);
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

    async getCurrentExchangeRate() {
        const tx = new Transaction();
        getExchangeRate(tx, HAEDAL_STAKING);
        tx.setSender("0x0");
        tx.setGasBudget(100);
        const builtTx = await tx.build({
            client: suiClient,
        });
        const result = await suiClient.devInspectTransactionBlock({
            transactionBlock: builtTx,
            sender: "0x0"
        });
        const exchangeRate = result.results?.[0].returnValues?.[0]?.[0];
        console.log(exchangeRate);
        return BigInt(1);
    }
}