/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreParenArithm } from "./ASTMoreParenArithm";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IParenArithm } from "./ParserTypes";
export declare class ASTNodeParenArithm extends ASTNode {
    kind: ASTnodeKind.ASTNodeParenArithm;
    kindString: string;
    more: ASTMoreParenArithm;
    Lparen: ASTPos;
    Rparen: ASTPos;
    X: ASTNodeArithmExpr;
    constructor(parenarithm: IParenArithm);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeParenArithm.d.ts.map