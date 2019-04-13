/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreParenTest } from "./ASTMoreParenTest";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeTestExpr } from "./ASTNodeTestExpr";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IParenTest } from "./ParserTypes";
export declare class ASTNodeParenTest extends ASTNode {
    kind: ASTnodeKind.ASTNodeParenTest;
    kindString: string;
    more: ASTMoreParenTest;
    Lparen: ASTPos;
    Rparen: ASTPos;
    X: ASTNodeTestExpr;
    constructor(parentest: IParenTest);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeParenTest.d.ts.map