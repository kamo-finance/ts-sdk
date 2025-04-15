import * as package_source_0 from "../_dependencies/source/0x0/init";
import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_2 from "../_dependencies/source/0x2/init";
import * as package_source_3 from "../_dependencies/source/0x3/init";
import * as package_source_a1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29 from "../_dependencies/source/0xa1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29/init";
import * as package_source_acf52d684c50bb6059d759a40f06f068cc0f93f0935e917caf3486da47ba0cde from "../kamo/init";
import * as package_source_1db0391e731e9edf7c6d8a692638295094d179d1a3a668bcc8ed28db52524148 from "../kusdc/init";
import * as package_source_a2fce748e9e273deb05a5166694c992170d6e4eff42966ea0f88a66a749f65e4 from "../kusdc_wrapper/init";
import * as package_source_9ef0f05fd43c7b1ffcbd7739d4f534407490b2c5be1adffe91df76bc344dc6bb from "../legato-math/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_0.registerClasses(loader);
package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_3.registerClasses(loader);
package_source_1db0391e731e9edf7c6d8a692638295094d179d1a3a668bcc8ed28db52524148.registerClasses(loader);
package_source_9ef0f05fd43c7b1ffcbd7739d4f534407490b2c5be1adffe91df76bc344dc6bb.registerClasses(loader);
package_source_a1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29.registerClasses(loader);
package_source_a2fce748e9e273deb05a5166694c992170d6e4eff42966ea0f88a66a749f65e4.registerClasses(loader);
package_source_acf52d684c50bb6059d759a40f06f068cc0f93f0935e917caf3486da47ba0cde.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
