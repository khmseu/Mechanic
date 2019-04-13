/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreBinaryTest } from "./ASTMoreBinaryTest";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeTestExpr } from "./ASTNodeTestExpr";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IBinaryTest } from "./ParserTypes";
export declare class ASTNodeBinaryTest extends ASTNode {
    kind: ASTnodeKind.ASTNodeBinaryTest;
    kindString: string;
    more: ASTMoreBinaryTest;
    OpPos: ASTPos;
    Op: string;
    OpString: string;
    X: ASTNodeTestExpr;
    Y: ASTNodeTestExpr;
    constructor(binarytest: IBinaryTest);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeBinaryTest.d.ts.map