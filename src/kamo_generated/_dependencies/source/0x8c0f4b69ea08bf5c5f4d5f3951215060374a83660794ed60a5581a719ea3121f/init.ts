import * as kusdc from "./kusdc/structs";
import * as system from "./system/structs";
import {StructClassLoader} from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(kusdc.KUSDC);
loader.register(system.System);
 }
