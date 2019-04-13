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
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ASTReplace } from "./ASTReplace";
import { ASTSlice } from "./ASTSlice";
import { IParamExp } from "./ParserTypes";
export declare class ASTNodeParamExp extends ASTNode {
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
    Index: ASTNodeArithmExpr;
    Slice: ASTSlice | null;
    Repl: ASTReplace | null;
    Names: string;
    NamesString: string;
    Exp: ASTExpansion | null;
    constructor(paramexp: IParamExp);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeParamExp.d.ts.map