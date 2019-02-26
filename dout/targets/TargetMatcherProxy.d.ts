/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { VarTree } from "../variables/VarTree";
import { ITargetDetails } from "./ITargetDetails";
import { ITargetMatcher, ITargetMatcherRaw } from "./ITargetMatcher";
export declare class TargetMatcherProxy implements ITargetMatcher {
    private jsTM;
    constructor(jsTM: ITargetMatcherRaw);
    match(vars: VarTree, full: string, parent: string, child: string): ITargetDetails;
    generate(vars: VarTree): string;
    toString(): string;
}
//# sourceMappingURL=TargetMatcherProxy.d.ts.map