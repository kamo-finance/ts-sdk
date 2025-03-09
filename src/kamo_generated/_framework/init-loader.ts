import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_bde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d from "../haedal/init";
import * as package_source_83aeb46080c88960f88c35a1a6798f0c8d8e1ff00b00a6ceeeba8dc58e7dd20d from "../hasui_wrapper/init";
import * as package_source_94ad88662d6fb49ebf61aa454fae0a896610c9b5d4dfeb5ca71d3118b73df6b7 from "../kamo/init";
import * as package_source_2dc2de613e946a2a56434189b8875cfcc457ab2c6735e014bdb56209a1bedb6 from "../legato-math/init";
import * as package_source_3 from "../sui-system/init";
import * as package_source_2 from "../sui/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_3.registerClasses(loader);
package_source_2dc2de613e946a2a56434189b8875cfcc457ab2c6735e014bdb56209a1bedb6.registerClasses(loader);
package_source_83aeb46080c88960f88c35a1a6798f0c8d8e1ff00b00a6ceeeba8dc58e7dd20d.registerClasses(loader);
package_source_94ad88662d6fb49ebf61aa454fae0a896610c9b5d4dfeb5ca71d3118b73df6b7.registerClasses(loader);
package_source_bde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
