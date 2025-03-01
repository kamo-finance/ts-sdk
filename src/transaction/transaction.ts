import { Transaction } from '@mysten/sui/transactions';
import { createNewState } from '../kamo_generated/hasui_wrapper/wrapper/functions';
import { createFromRawValue } from '../kamo_generated/legato-math/fixed-point64/functions';
import { suiClient } from '../client/client';
import { PUBLISHED_AT as HASUI_WRAPPER_PACKAGE_ID } from '../kamo_generated/hasui_wrapper';
import { PUBLISHED_AT as KAMO_PACKAGE } from '../kamo_generated/kamo';
import { FACTORY } from './const';

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

export interface BurnParams {
    ptAmountBurned: bigint;
    sender: string;
    tx?: Transaction;
}

export abstract class KamoTransaction {
    abstract mint(params: MintParams): Promise<Transaction>;
    abstract burn(params: BurnParams): Promise<Transaction>;
    abstract addLiquidity(params: AddLiquidityParams): Promise<Transaction>;
    abstract removeLiquidity(params: RemoveLiquidityParams): Promise<Transaction>;

    static async NewState(params: NewStateParams) {
        const tx = new Transaction();
        const objects = await suiClient.getOwnedObjects({
            owner: params.owner,
            options: {
                showType: true,
            }
        });
        const treasuryCap = objects.data.find((o) => o.data?.type === `0x2::coin::TreasuryCap<${HASUI_WRAPPER_PACKAGE_ID}::PT::PT>`);
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