/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeTestExpr } from "./ASTNodeTestExpr";
import { ASTPos } from "./ASTPos";
import { IParenTest } from "./ParserTypes";
export declare class ASTNodeParenTest extends ASTNode {
    kind: ASTnodeKind.ASTNodeParenTest;
    Lparen: ASTPos;
    Rparen: ASTPos;
    X: ASTNodeTestExpr;
    constructor(parentest: IParenTest);
}
//# sourceMappingURL=ASTNodeParenTest.d.ts.map