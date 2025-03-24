import * as package_source_0 from "../_dependencies/source/0x0/init";
import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_2 from "../_dependencies/source/0x2/init";
import * as package_source_3 from "../_dependencies/source/0x3/init";
import * as package_source_a1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29 from "../_dependencies/source/0xa1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29/init";
import * as package_source_b6f623f0b3c49859ca50ae8cff539efd5afa258960973f3dc65613f0d06d010f from "../kamo/init";
import * as package_source_8c0f4b69ea08bf5c5f4d5f3951215060374a83660794ed60a5581a719ea3121f from "../kusdc/init";
import * as package_source_419ee9c91c3acb2258b6ff00b2c6c8d49eb62f90b3aa1c2d8f82e63d72b26637 from "../kusdc_wrapper/init";
import * as package_source_9ef0f05fd43c7b1ffcbd7739d4f534407490b2c5be1adffe91df76bc344dc6bb from "../legato-math/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_0.registerClasses(loader);
package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_3.registerClasses(loader);
package_source_419ee9c91c3acb2258b6ff00b2c6c8d49eb62f90b3aa1c2d8f82e63d72b26637.registerClasses(loader);
package_source_8c0f4b69ea08bf5c5f4d5f3951215060374a83660794ed60a5581a719ea3121f.registerClasses(loader);
package_source_9ef0f05fd43c7b1ffcbd7739d4f534407490b2c5be1adffe91df76bc344dc6bb.registerClasses(loader);
package_source_a1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29.registerClasses(loader);
package_source_b6f623f0b3c49859ca50ae8cff539efd5afa258960973f3dc65613f0d06d010f.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
