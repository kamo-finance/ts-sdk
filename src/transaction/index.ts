import { STATE_ADDRESS_MAP } from "./const";
import { KamoTransaction } from "./transaction";
import { HasuiTransaction } from "./wrapper";

export const newKamoTransaction = ({
  market,
  stateId,
}: {
  market?: string;
  stateId?: string;
}): KamoTransaction => {
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
  throw new Error(`Unsupported market: ${market}`);
}

export * from "./transaction";
export * from "./wrapper";