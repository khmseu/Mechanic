/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { DependencySpecList } from "../dependencies/DependencySpecList";
import { TargetSpecList } from "../targets/TargetSpecList";
import { CallbackR } from "./CallbackR";
/**
 *
 * @param spec
 * @return
 */
export declare function Rule(spec: {
    Targets: TargetSpecList;
    Dependencies: DependencySpecList;
    Recipe: CallbackR;
}): void;
//# sourceMappingURL=Rule.d.ts.map