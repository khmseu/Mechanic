/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { IParenArithm } from "./ParserTypes";
export declare class ASTNodeParenArithm extends ASTNode {
    kind: ASTnodeKind.ASTNodeParenArithm;
    Lparen: ASTPos;
    Rparen: ASTPos;
    X: ASTNodeArithmExpr;
    constructor(parenarithm: IParenArithm);
}
//# sourceMappingURL=ASTNodeParenArithm.d.ts.map