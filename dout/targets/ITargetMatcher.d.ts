/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { DataFromJS } from "../js/DataFromJS";
import { VarTree } from "../variables/VarTree";
import { ITargetDetails } from "./ITargetDetails";
/**
 * Itarget matcher
 */
export interface ITargetMatcher {
    /**
     *
     * @param full
     * @param parent
     * @param child
     * @returns match
     */
    match(vars: VarTree, full: string, parent: string, child: string): ITargetDetails;
    /**
     *
     * @param vars
     * @returns generate
     */
    generate(vars: VarTree): string;
    /**
     *
     * @returns string
     */
    toString(): string;
}
export interface ITargetMatcherRaw {
    match: DataFromJS;
    generate: DataFromJS;
    toString: DataFromJS;
}
//# sourceMappingURL=ITargetMatcher.d.ts.map