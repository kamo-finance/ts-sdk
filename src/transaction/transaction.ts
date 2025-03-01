import { Transaction } from '@mysten/sui/transactions';
import { createNewMarket } from '../kamo_generated/hasui_wrapper/wrapper/functions';
import { createFromRawValue } from '../kamo_generated/legato-math/fixed-point64/functions';
import { suiClient } from '../client/client';
import { PUBLISHED_AT as HASUI_WRAPPER_PACKAGE_ID } from '../kamo_generated/hasui_wrapper';

export interface AddLiquidityParams {
    amountPT: number;
    amountSY: number;
    sender: string;
    tx?: Transaction;
}

export interface RemoveLiquidityParams {
    amountLP: number;
    stateId: string;
    sender: string;
    tx?: Transaction;
}

export interface NewMarketParams {
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

export abstract class KamoTransaction {
    abstract mint(params: MintParams): Promise<Transaction>;
    abstract addLiquidity(params: AddLiquidityParams): Promise<Transaction>;
    abstract removeLiquidity(params: RemoveLiquidityParams): Promise<Transaction>;

    static async NewMarket(params: NewMarketParams) {
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
        createNewMarket(tx, {
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