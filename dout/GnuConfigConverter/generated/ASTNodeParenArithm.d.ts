/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { IParenArithm } from "../ParserTypes";
import { ASTMoreParenArithm } from "./ASTMoreParenArithm";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTNodeParenArithm extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeParenArithm;
    kindString: string;
    more: ASTMoreParenArithm;
    Lparen: ASTPos;
    Rparen: ASTPos;
    X: ASTNodeArithmExpr;
    constructor(parenarithm: IParenArithm, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeParenArithm.d.ts.map