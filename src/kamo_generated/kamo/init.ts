import * as amm from "./amm/structs";
import * as syTokenization from "./sy-tokenization/structs";
import * as yieldObject from "./yield-object/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(amm.LP);
loader.register(amm.Market);
loader.register(amm.PreComputeMarket);
loader.register(yieldObject.YieldObject);
loader.register(syTokenization.Factory);
loader.register(syTokenization.Registry);
loader.register(syTokenization.TypenameItem);
 }
