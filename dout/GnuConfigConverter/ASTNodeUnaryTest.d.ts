/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreUnaryTest } from "./ASTMoreUnaryTest";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeTestExpr } from "./ASTNodeTestExpr";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IUnaryTest } from "./ParserTypes";
export declare class ASTNodeUnaryTest extends ASTNode {
    kind: ASTnodeKind.ASTNodeUnaryTest;
    kindString: string;
    more: ASTMoreUnaryTest;
    OpPos: ASTPos;
    Op: string;
    OpString: string;
    X: ASTNodeTestExpr;
    constructor(unarytest: IUnaryTest);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeUnaryTest.d.ts.map