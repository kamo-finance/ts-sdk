import * as amm from "./amm/structs";
import * as syTokenization from "./sy-tokenization/structs";
import * as yieldObject from "./yield-object/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(amm.AddLiquidityEvent);
loader.register(amm.LP);
loader.register(amm.Market);
loader.register(amm.PreComputeMarket);
loader.register(amm.RemoveLiquidityEvent);
loader.register(amm.SwapExactPtForSyEvent);
loader.register(amm.SwapSyForExactPtEvent);
loader.register(yieldObject.YieldObject);
loader.register(syTokenization.Factory);
loader.register(syTokenization.NewRegistryEvent);
loader.register(syTokenization.Registry);
loader.register(syTokenization.TypenameItem);
 }
