import * as pt from "./pt/structs";
import * as wrapper from "./wrapper/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(pt.PT);
loader.register(wrapper.State);
 }
