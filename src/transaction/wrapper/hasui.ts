import { coinWithBalance, Transaction } from "@mysten/sui/transactions";
import { AddLiquidityParams, KamoTransaction, MintParams, RemoveLiquidityParams } from "../transaction";
import { addLiquidity, mint, removeLiquidity } from "../../kamo_generated/hasui_wrapper/wrapper/functions";
import { State } from "../../kamo_generated/hasui_wrapper/wrapper/structs";
import { STATE_ADDRESS_MAP } from "../const";
import { suiClient } from "../../client/client";
import { PUBLISHED_AT as KAMO_PACKAGE } from "../../kamo_generated/kamo";

const HAEDAL_STAKING = "0x47b224762220393057ebf4f70501b6e657c3e56684737568439a04f80849b2ca";

export class HasuiTransaction extends KamoTransaction {
    async mint(params: MintParams) {
        const tx = params.tx || new Transaction();
        const state = await State.fetch(suiClient, STATE_ADDRESS_MAP.get("HASUI")!);
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
        const state = await State.fetch(suiClient, params.stateId);
        const lp = coinWithBalance({
            type: `${KAMO_PACKAGE}::amm::LP<${state.market.$typeArgs[0]}, ${state.market.$typeArgs[1]}>`,
            balance: params.amountLP
        });
        const [pt, sy] = removeLiquidity(
            tx,
            {
                state: params.stateId,
                lp,
            }
        )
        tx.transferObjects([pt, sy], params.sender);
        return tx;
    }
}