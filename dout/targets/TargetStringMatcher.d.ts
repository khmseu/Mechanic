/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { VarTree } from "../variables/VarTree";
import { ITargetDetails } from "./ITargetDetails";
import { ITargetMatcher } from "./ITargetMatcher";
/**
 * Target string matcher
 */
export declare class TargetStringMatcher implements ITargetMatcher {
    private readonly m;
    /**
     * Fp  of target string matcher
     */
    private readonly fp;
    /**
     * Rx  of target string matcher
     */
    private readonly rx;
    /**
     * Creates an instance of target string matcher.
     * @param m
     */
    constructor(m: string);
    /**
     * Matchs target string matcher
     * @param _
     * @param __
     * @param child
     * @returns match
     */
    match(_: string, __: string, child: string): ITargetDetails | null;
    /**
     * Generates target string matcher
     * @param vars
     * @returns generate
     */
    generate(vars: VarTree): string;
    /**
     * To string
     * @returns string
     */
    toString(): string;
}
//# sourceMappingURL=TargetStringMatcher.d.ts.map