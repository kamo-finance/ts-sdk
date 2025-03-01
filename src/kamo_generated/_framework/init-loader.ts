import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_bde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d from "../haedal/init";
import * as package_source_2d9cba3d6a801d39a63e1f9be278b5fd8d7f0c0cabde8e81b93ff4d4935997a3 from "../hasui_wrapper/init";
import * as package_source_4d4a7ad1a625db745e35349b906e9c8496fc00d4b78f6f2e47bcf527d5f7e9 from "../kamo/init";
import * as package_source_2dc2de613e946a2a56434189b8875cfcc457ab2c6735e014bdb56209a1bedb6 from "../legato-math/init";
import * as package_source_3 from "../sui-system/init";
import * as package_source_2 from "../sui/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_3.registerClasses(loader);
package_source_4d4a7ad1a625db745e35349b906e9c8496fc00d4b78f6f2e47bcf527d5f7e9.registerClasses(loader);
package_source_2dc2de613e946a2a56434189b8875cfcc457ab2c6735e014bdb56209a1bedb6.registerClasses(loader);
package_source_2d9cba3d6a801d39a63e1f9be278b5fd8d7f0c0cabde8e81b93ff4d4935997a3.registerClasses(loader);
package_source_bde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
