/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { CurrentVarValue } from "./CurrentVarValue";
import { VarValue } from "./VarValue";
/**
 * Var tree
 */
export declare class VarTree {
    /**
     * Vars  of var tree
     */
    private vars;
    /**
     * Creates an instance of var tree.
     */
    constructor();
    /**
     * Gets var
     * @param varName
     * @returns var
     */
    getVar(varName: string): CurrentVarValue;
    /**
     * Sets var
     * @param varName
     * @param varValue
     */
    setVar(varName: string, varValue: VarValue): void;
    /**
     * Gets ns
     * @param ns
     * @returns
     */
    private getNS;
}
//# sourceMappingURL=VarTree.d.ts.map