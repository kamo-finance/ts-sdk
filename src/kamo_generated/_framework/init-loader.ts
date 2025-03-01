import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_bde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d from "../haedal/init";
import * as package_source_93afe3d0206043f1403c7d21298120e682eb78c4206f377a63c01956d7b86a3a from "../hasui_wrapper/init";
import * as package_source_3ae833ce7ab994a505b0d68772b920cd18b5dfb4b05555985e07b1e10f43169e from "../kamo/init";
import * as package_source_2dc2de613e946a2a56434189b8875cfcc457ab2c6735e014bdb56209a1bedb6 from "../legato-math/init";
import * as package_source_3 from "../sui-system/init";
import * as package_source_2 from "../sui/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_3.registerClasses(loader);
package_source_2dc2de613e946a2a56434189b8875cfcc457ab2c6735e014bdb56209a1bedb6.registerClasses(loader);
package_source_3ae833ce7ab994a505b0d68772b920cd18b5dfb4b05555985e07b1e10f43169e.registerClasses(loader);
package_source_93afe3d0206043f1403c7d21298120e682eb78c4206f377a63c01956d7b86a3a.registerClasses(loader);
package_source_bde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
