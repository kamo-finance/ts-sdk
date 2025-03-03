import { coinWithBalance, Transaction } from "@mysten/sui/transactions";
import { AddLiquidityParams, RedeemBeforeMaturityParams, KamoTransaction, MintParams, RemoveLiquidityParams, SwapPtForSyParams } from "../transaction";
import { addLiquidity, mint, redeemAfterMaturity, redeemBeforeMaturity, removeLiquidity, swapExactPtForSy } from "../../kamo_generated/hasui_wrapper/wrapper/functions";
import { State } from "../../kamo_generated/hasui_wrapper/wrapper/structs";
import { STATE_ADDRESS_MAP } from "../const";
import { suiClient } from "../../client/client";
import { PUBLISHED_AT as KAMO_PACKAGE } from "../../kamo_generated/kamo";
import { merge, split } from "../../kamo_generated/hasui_wrapper/wrapper/functions";

const HAEDAL_STAKING = "0x47b224762220393057ebf4f70501b6e657c3e56684737568439a04f80849b2ca";

export class HasuiTransaction extends KamoTransaction {
    async mint(params: MintParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, STATE_ADDRESS_MAP.get("HASUI")!);
        if (Date.now() > state.market.expiry) {
            throw new Error("Market expired");
        }
        const sy = coinWithBalance({
            type: state.market.$typeArgs[1],
            balance: params.sy_amount_in
        });
        const [pt, yield_object] = mint(tx, {
            state: STATE_ADDRESS_MAP.get("HASUI")!,
            hasuiCoinIn: sy,
            staking: HAEDAL_STAKING,
            clock: tx.object.clock()
        });
        tx.transferObjects([pt, yield_object], params.sender);
        return tx;
    }

    async redeemBeforeMaturity(params: RedeemBeforeMaturityParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, STATE_ADDRESS_MAP.get("HASUI")!);
        const pt = coinWithBalance({
            type: state.market.$typeArgs[0],
            balance: params.ptAmountBurned
        });
        const ownedObjects = await suiClient.getOwnedObjects({
            owner: params.sender,
            options: {
                showType: true,
            }
        });
        const yieldObjects = ownedObjects.data.filter((o) => o.data?.type === `${KAMO_PACKAGE}::yield_object::YieldObject<${state.market.$typeArgs[0]}, ${state.market.$typeArgs[1]}>`);
        if (yieldObjects.length === 0 || !yieldObjects[0].data) {
            throw new Error("YieldObject not found");
        }
        const yieldObject = yieldObjects[0];
        if (!yieldObject.data) {
            throw new Error("YieldObject not found");
        }
        for (let i = 1; i < yieldObjects.length; i++) {
            const currentYieldObject = yieldObjects[i];
            if (!currentYieldObject.data) {
                throw new Error("YieldObject not found");
            }
            merge(tx,             
            {
                state: STATE_ADDRESS_MAP.get("HASUI")!,
                self: yieldObject.data.objectId,
                yieldObject: currentYieldObject.data.objectId,
                staking: HAEDAL_STAKING,
            })
        }
        const splitedYieldObject = split(tx, 
        {
            state: STATE_ADDRESS_MAP.get("HASUI")!,
            yieldObject: yieldObject.data.objectId,
            amount: params.ptAmountBurned
        });
        const sy = redeemBeforeMaturity(tx, {
            state: STATE_ADDRESS_MAP.get("HASUI")!,
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
        const state = await State.fetch(suiClient, STATE_ADDRESS_MAP.get("HASUI")!);
        const pt = coinWithBalance({
            type: state.market.$typeArgs[0],
            balance: params.ptAmountBurned
        });
        const sy = redeemAfterMaturity(tx, {
            state: STATE_ADDRESS_MAP.get("HASUI")!,
            ptCoinIn: pt,
            staking: HAEDAL_STAKING,
            clock: tx.object.clock()
        });
        tx.transferObjects([sy], params.sender);
        return tx;
    }

    async addLiquidity(params: AddLiquidityParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, STATE_ADDRESS_MAP.get("HASUI")!);
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
                state: STATE_ADDRESS_MAP.get("HASUI")!,
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
        const state = await State.fetch(suiClient, STATE_ADDRESS_MAP.get("HASUI")!);
        const lp = coinWithBalance({
            type: `${KAMO_PACKAGE}::amm::LP<${state.market.$typeArgs[0]}, ${state.market.$typeArgs[1]}>`,
            balance: params.amountLP
        });
        const [pt, sy] = removeLiquidity(
            tx,
            {
                state: STATE_ADDRESS_MAP.get("HASUI")!,
                lp,
            }
        )
        tx.transferObjects([pt, sy], params.sender);
        return tx;
    }

    async swapPtForSy(params: SwapPtForSyParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, STATE_ADDRESS_MAP.get("HASUI")!);
        const pt = coinWithBalance({
            type: state.market.$typeArgs[0],
            balance: params.ptAmount
        });
        const sy = swapExactPtForSy(tx, {
            state: STATE_ADDRESS_MAP.get("HASUI")!,
            ptCoin: pt,
            staking: HAEDAL_STAKING,
            clock: tx.object.clock()
        });
        tx.transferObjects([sy], params.sender);
        return tx;
    }
}