import { STATE_ADDRESS_MAP } from "../const";
import { KamoTransaction } from "./transaction";
import { HasuiTransaction } from "./wrapper";
import { KUSDCTransaction } from "./wrapper/kusdc";

export interface CreateNewKamoTransactionParams {
  market?: string;
  stateId?: string;
}

export const newKamoTransaction = (params: CreateNewKamoTransactionParams): KamoTransaction => {
  let { market, stateId } = params;
  if (!market && stateId) {
      STATE_ADDRESS_MAP.forEach((value, key) => {
          if (value === stateId) {
              market = key;
          }
      });
  }
  if (market === "HASUI") {
      return new HasuiTransaction();
  }
  if (market === "KUSDC") {
      return new KUSDCTransaction();
  }
  throw new Error(`Unsupported market: ${market}`);
}

export * from "./transaction";
export * from "./wrapper";