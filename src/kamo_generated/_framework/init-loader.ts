import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_bde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d from "../haedal/init";
import * as package_source_16ce88ccdf05c6519776044437265d4a96404ac6527ff76bc8ee756b4f59efc5 from "../hasui_wrapper/init";
import * as package_source_2aead50beeac350614fc0ca573a15b6b0b7658d0271b3c3f8cb82c6be3e77b09 from "../kamo/init";
import * as package_source_2dc2de613e946a2a56434189b8875cfcc457ab2c6735e014bdb56209a1bedb6 from "../legato-math/init";
import * as package_source_3 from "../sui-system/init";
import * as package_source_2 from "../sui/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_3.registerClasses(loader);
package_source_2dc2de613e946a2a56434189b8875cfcc457ab2c6735e014bdb56209a1bedb6.registerClasses(loader);
package_source_16ce88ccdf05c6519776044437265d4a96404ac6527ff76bc8ee756b4f59efc5.registerClasses(loader);
package_source_2aead50beeac350614fc0ca573a15b6b0b7658d0271b3c3f8cb82c6be3e77b09.registerClasses(loader);
package_source_bde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
