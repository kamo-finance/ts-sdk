import * as amm from "./amm/structs";
import * as manager from "./manager/structs";
import * as yieldObject from "./yield-object/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(yieldObject.YieldObject);
loader.register(amm.Config);
loader.register(amm.LP);
loader.register(amm.Market);
loader.register(amm.PreComputeMarket);
loader.register(manager.State);
 }
