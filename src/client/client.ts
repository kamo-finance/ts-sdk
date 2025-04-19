import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { exchangeRatePtToAsset, KamoTransaction, newKamoTransaction } from "../transaction";
import { State as HasuiState } from "../kamo_generated/hasui_wrapper/wrapper/structs";
import { State as KusdcState } from "../kamo_generated/kusdc_wrapper/wrapper/structs";
import { STATE_ADDRESS_MAP, SUPPORTED_MARKETS } from "../const";
import { PUBLISHED_AT as KAMO_PACKAGE } from "../kamo_generated/kamo";
import { isYieldObject, YieldObject } from "../kamo_generated/kamo/yield-object/structs";
import { phantom } from "../kamo_generated/_framework/reified";
import { compressSuiType } from "../kamo_generated/_framework/util";
import { FixedPoint64, mappingState } from "../utils";
import { balance } from '../kamo_generated/sui/coin/functions';

export const suiClient = new SuiClient(
    {
        url: getFullnodeUrl("testnet"),
    }
);

export interface CreateNewKamoClientParams {
    client: SuiClient;
}

export interface GetYieldObjectsParams {
    stateId: string;
    owner: string;
}

export interface GetUnclaimedSyAmountParams {
    stateId: string;
    owner: string;
}

export interface GetBalancesParams {
    stateId: string;
    owner: string;
}

export interface GetMintAmountParams {
    stateId: string;
    syAmount: bigint;
}

export interface GetLiquidityAmountParams {
    stateId: string;
    owner: string;
}

export interface GetPositionsParams {
    owner: string;
}

export class KamoClient {    
    private client: SuiClient;

    constructor(params: CreateNewKamoClientParams) {
        this.client = params.client;
    }

    async getYieldObjects(params: GetYieldObjectsParams) {
        const stateId = params.stateId;
        const type = mappingState(params.stateId);
        let state: any = undefined;
        if (type === SUPPORTED_MARKETS.HASUI) {
            state = await HasuiState.fetch(this.client, stateId);
        }
        if (type === SUPPORTED_MARKETS.KUSDC) {
            state = await KusdcState.fetch(this.client, stateId);
        }   
        if (!state) {
            throw `Could not get state: ${stateId}`;
        }
        const yieldObjectType = `${KAMO_PACKAGE}::yield_object::YieldObject<${state.market.$typeArgs[0]},${state.market.$typeArgs[1]}>`;
        const ownedObject = await this.client.getOwnedObjects({
            owner: params.owner,
            options: {
                showType: true,
            },
            filter: {
                StructType: yieldObjectType,
            }
        }); 
        const yieldObjects = ownedObject.data.map((object) => object.data).filter((data) => data != null && data != undefined).filter((data) => data.type && compressSuiType(data.type) === yieldObjectType);
        const objects = yieldObjects.map(async (object) => { 
            const res = await YieldObject.fetch(suiClient, [phantom(state.market.$typeArgs[0]), phantom(state.market.$typeArgs[1])], object.objectId);
            return res; 
        });
        const result = await Promise.all(objects);
        return result;
    };

    async getBalances(params: GetBalancesParams) {
        const stateId = params.stateId;
        const type = mappingState(params.stateId);
        let state: HasuiState | KusdcState | undefined = undefined; 
        if (type === SUPPORTED_MARKETS.HASUI) {
            state = await HasuiState.fetch(suiClient, stateId);
        }
        if (type === SUPPORTED_MARKETS.KUSDC) {
            state = await KusdcState.fetch(suiClient, stateId);
        }
        if (!state) {
            throw `Could not get state: ${stateId}`;
        }
        const syBalance = await suiClient.getBalance({
            owner: params.owner,
            coinType: state.market.$typeArgs[1],
        });
        const ptBalance = await suiClient.getBalance({
            owner: params.owner,
            coinType: state.market.$typeArgs[0],
        });
        const yoBalance = (await this.getYieldObjects({
            stateId,
            owner: params.owner,
        })).reduce((acc, yo) => {
            return acc + BigInt(yo.amount);
        }, BigInt(0));

        const lpObjects = await this.client.getOwnedObjects({
            owner: params.owner,
            options: {
                showType: true,
                showContent: true,
            },
            filter: {
                StructType: `0x2::coin::Coin<${KAMO_PACKAGE}::amm::LP<${state.market.$typeArgs[0]},${state.market.$typeArgs[1]}>>`,
            }
        });
        const liquidityBalance = lpObjects.data.reduce((acc, lp) => {
            return acc + BigInt((lp.data as any).content.fields.balance);
        }, BigInt(0));

        return {
            syBalance,
            ptBalance,
            yoBalance, 
            liquidityBalance,
        };
    }

    async getPositions(params: GetPositionsParams) {
        for (const market of Object.values(SUPPORTED_MARKETS)) {
            try {
                const balances = await this.getBalances({
                    stateId: STATE_ADDRESS_MAP.get(market)!,
                    owner: params.owner,
                });
                return {
                    balances,
                    market,
                }
            } catch (error) {
                // console.log(error);
            }
        }
    }

    // async getUnclaimedSyAmount(params: GetUnclaimedSyAmountParams) {
    //     try {
    //         let type = mappingState(params.stateId);
    //         let currentExchangeRate;
    //         const yieldObjects = await this.getYieldObjects({
    //             stateId: params.stateId,
    //             owner: params.owner,
    //         });
    //         const current
    //         for (const yieldObject of yieldObjects) {
    //             const syUnclaimedAmount = yieldObject.syUnclaimedAmount;
    //         }
    //     } catch (error) {
    //         throw `Could not get unclaimed SY amount: ${error}`; 
    //     }
    // }
}