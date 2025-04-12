import * as package_source_0 from "../_dependencies/source/0x0/init";
import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_2 from "../_dependencies/source/0x2/init";
import * as package_source_3 from "../_dependencies/source/0x3/init";
import * as package_source_a1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29 from "../_dependencies/source/0xa1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29/init";
import * as package_source_7ecda52c4295ba14d94d5246fa163160f65cb930f5ee35555aefa9dd01967a24 from "../kamo/init";
import * as package_source_b25ad617ae676ce0240536c5b9ddd9f92cb8c2f96c56f8941c5a4381a7819589 from "../kusdc/init";
import * as package_source_3fe0bbe220a35018a124583ef84e40fda564b97370c6b5eea6d61e8b40fa79cd from "../kusdc_wrapper/init";
import * as package_source_9ef0f05fd43c7b1ffcbd7739d4f534407490b2c5be1adffe91df76bc344dc6bb from "../legato-math/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_0.registerClasses(loader);
package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_3.registerClasses(loader);
package_source_3fe0bbe220a35018a124583ef84e40fda564b97370c6b5eea6d61e8b40fa79cd.registerClasses(loader);
package_source_7ecda52c4295ba14d94d5246fa163160f65cb930f5ee35555aefa9dd01967a24.registerClasses(loader);
package_source_9ef0f05fd43c7b1ffcbd7739d4f534407490b2c5be1adffe91df76bc344dc6bb.registerClasses(loader);
package_source_a1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29.registerClasses(loader);
package_source_b25ad617ae676ce0240536c5b9ddd9f92cb8c2f96c56f8941c5a4381a7819589.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
