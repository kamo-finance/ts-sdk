import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_bde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d from "../haedal/init";
import * as package_source_3da204689919f9b7458d2b9e3428fd5ffd5d5cef44fafbe23f43a5ba885de4c0 from "../hasui_wrapper/init";
import * as package_source_653f557f93c8307d15cc614465e4449594e73b3d70d9691368e5e289c7e5b374 from "../kamo/init";
import * as package_source_2dc2de613e946a2a56434189b8875cfcc457ab2c6735e014bdb56209a1bedb6 from "../legato-math/init";
import * as package_source_3 from "../sui-system/init";
import * as package_source_2 from "../sui/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_3.registerClasses(loader);
package_source_2dc2de613e946a2a56434189b8875cfcc457ab2c6735e014bdb56209a1bedb6.registerClasses(loader);
package_source_3da204689919f9b7458d2b9e3428fd5ffd5d5cef44fafbe23f43a5ba885de4c0.registerClasses(loader);
package_source_653f557f93c8307d15cc614465e4449594e73b3d70d9691368e5e289c7e5b374.registerClasses(loader);
package_source_bde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
