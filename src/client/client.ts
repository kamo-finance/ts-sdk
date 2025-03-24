import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { KamoTransaction } from "../transaction";
import { State } from "../kamo_generated/hasui_wrapper/wrapper/structs";
import { STATE_ADDRESS_MAP, SUPPORTED_MARKETS } from "../const";
import { PUBLISHED_AT as KAMO_PACKAGE } from "../kamo_generated/kamo";
import { isYieldObject, YieldObject } from "../kamo_generated/kamo/yield-object/structs";
import { phantom } from "../kamo_generated/_framework/reified";
import { compressSuiType } from "../kamo_generated/_framework/util";
import { mappingState } from "../transaction/utils";

export const suiClient = new SuiClient(
    {
        url: getFullnodeUrl("testnet"),
    }
);

export interface CreateNewKamoClientParams {
}

export interface GetYieldObjectsParams {
    stateId: string;
    owner: string;
}

export interface GetUnclaimedSyAmountParams {
    stateId: string;
    owner: string;
}

class KamoClient {
    constructor(params: CreateNewKamoClientParams) {

    }

    async getYieldObjects(params: GetYieldObjectsParams) {
        const stateId = params.stateId;
        const type = mappingState(params.stateId);
        let state: any = undefined;
        if (type === SUPPORTED_MARKETS.HASUI) {
            state = await State.fetch(suiClient, stateId);
        }
        if (!state) {
            throw `Could not get state: ${stateId}`;
        }
        const yieldObjectType = `${KAMO_PACKAGE}::yield_object::YieldObject<${state.market.$typeArgs[0]},${state.market.$typeArgs[1]}>`;
        const ownedObject = await suiClient.getOwnedObjects({
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

export const kamoClient = new KamoClient({});