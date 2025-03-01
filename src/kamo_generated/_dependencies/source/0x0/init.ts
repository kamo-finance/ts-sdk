import * as amm from "./amm/structs";
import * as manager from "./manager/structs";
import * as wrapper from "./wrapper/structs";
import * as yieldObject from "./yield-object/structs";
import {StructClassLoader} from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(amm.Config);
loader.register(amm.LP);
loader.register(amm.Market);
loader.register(amm.PreComputeMarket);
loader.register(yieldObject.YieldObject);
loader.register(manager.State);
loader.register(wrapper.PT);
loader.register(wrapper.State);
 }
