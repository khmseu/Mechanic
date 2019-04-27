/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTExpansion } from "./ASTExpansion";
import { ASTMoreParamExp } from "./ASTMoreParamExp";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTPos } from "./ASTPos";
import { ASTReplace } from "./ASTReplace";
import { ASTSlice } from "./ASTSlice";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { IParamExp } from "./ParserTypes";
export declare class ASTNodeParamExp extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeParamExp;
    kindString: string;
    more: ASTMoreParamExp;
    Dollar: ASTPos;
    Rbrace: ASTPos;
    Short: boolean;
    Excl: boolean;
    Length: boolean;
    Width: boolean;
    Param: ASTNodeLit | null;
    Index: ASTNodeArithmExpr | null;
    Slice: ASTSlice | null;
    Repl: ASTReplace | null;
    Names: string | null;
    NamesString: string | null;
    Exp: ASTExpansion | null;
    constructor(paramexp: IParamExp, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeParamExp.d.ts.map