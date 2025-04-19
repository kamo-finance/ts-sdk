import * as package_source_0 from "../_dependencies/source/0x0/init";
import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_2 from "../_dependencies/source/0x2/init";
import * as package_source_3 from "../_dependencies/source/0x3/init";
import * as package_source_a1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29 from "../_dependencies/source/0xa1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29/init";
import * as package_source_2fb0f5d7d270f4842a7e9acabaf753ba2bb64d422e784b69fb93c9e79604d929 from "../kamo/init";
import * as package_source_2760667194b41b40e2c046b572a98bc7e737d22afcde1f1c1c7458cd902a0b0c from "../kusdc/init";
import * as package_source_ae198e321d2195f1cdc62e8aba72bd7e67bbed83ad12bcc7247a0168776197fe from "../kusdc_wrapper/init";
import * as package_source_9ef0f05fd43c7b1ffcbd7739d4f534407490b2c5be1adffe91df76bc344dc6bb from "../legato-math/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_0.registerClasses(loader);
package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_3.registerClasses(loader);
package_source_2760667194b41b40e2c046b572a98bc7e737d22afcde1f1c1c7458cd902a0b0c.registerClasses(loader);
package_source_2fb0f5d7d270f4842a7e9acabaf753ba2bb64d422e784b69fb93c9e79604d929.registerClasses(loader);
package_source_9ef0f05fd43c7b1ffcbd7739d4f534407490b2c5be1adffe91df76bc344dc6bb.registerClasses(loader);
package_source_a1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29.registerClasses(loader);
package_source_ae198e321d2195f1cdc62e8aba72bd7e67bbed83ad12bcc7247a0168776197fe.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
