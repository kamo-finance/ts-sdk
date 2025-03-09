import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_bde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d from "../haedal/init";
import * as package_source_8f8a54372be50d11601baed6c5f722d7e7a3225902f3af2bd5cc5118ab93ecbc from "../hasui_wrapper/init";
import * as package_source_8eff8d1f8494d03fbea51c9cc13013e4e0fdb08e20d61378ce30b5d1f249cd5a from "../kamo/init";
import * as package_source_2dc2de613e946a2a56434189b8875cfcc457ab2c6735e014bdb56209a1bedb6 from "../legato-math/init";
import * as package_source_3 from "../sui-system/init";
import * as package_source_2 from "../sui/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_3.registerClasses(loader);
package_source_2dc2de613e946a2a56434189b8875cfcc457ab2c6735e014bdb56209a1bedb6.registerClasses(loader);
package_source_8eff8d1f8494d03fbea51c9cc13013e4e0fdb08e20d61378ce30b5d1f249cd5a.registerClasses(loader);
package_source_8f8a54372be50d11601baed6c5f722d7e7a3225902f3af2bd5cc5118ab93ecbc.registerClasses(loader);
package_source_bde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
