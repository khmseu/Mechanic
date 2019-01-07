/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { DependencyGeneratorList } from "../dependencies/DependencyGeneratorList";
import { TargetMatcherList } from "../targets/TargetMatcherList";
import { VarTree } from "../variables/VarTree";
import { CallbackR } from "./CallbackR";
/**
 * Rule object
 */
export declare class RuleObject {
    targets: TargetMatcherList;
    dependencies: DependencyGeneratorList;
    recipe: CallbackR;
    /**
     * Creates an instance of rule object.
     * @param targets
     * @param dependencies
     * @param recipe
     */
    constructor(targets: TargetMatcherList, //
    dependencies: DependencyGeneratorList, recipe: CallbackR);
    /**
     * Matches rule object
     * @param wantedTarget
     * @param vars
     * @returns matches
     */
    matches(wantedTarget: string, vars: VarTree): string[] | null;
}
export declare const rules: RuleObject[];
//# sourceMappingURL=RuleObject.d.ts.map