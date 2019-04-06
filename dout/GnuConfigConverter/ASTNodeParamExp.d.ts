/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTExpansion } from "./ASTExpansion";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTPos } from "./ASTPos";
import { ASTReplace } from "./ASTReplace";
import { ASTSlice } from "./ASTSlice";
import { IParamExp, ParNamesOperator } from "./ParserTypes";
export declare class ASTNodeParamExp extends ASTNode {
    kind: ASTnodeKind.ASTNodeParamExp;
    Dollar: ASTPos;
    Rbrace: ASTPos;
    Short: boolean;
    Excl: boolean;
    Length: boolean;
    Width: boolean;
    Param: ASTNodeLit | null;
    Index: ASTNodeArithmExpr;
    Slice: ASTSlice | null;
    Repl: ASTReplace | null;
    Names: ParNamesOperator;
    Exp: ASTExpansion | null;
    constructor(paramexp: IParamExp);
}
//# sourceMappingURL=ASTNodeParamExp.d.ts.map