/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { IBinaryTest } from "../ParserTypes";
import { ASTMoreBinaryTest } from "./ASTMoreBinaryTest";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeTestExpr } from "./ASTNodeTestExpr";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTNodeBinaryTest extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeBinaryTest;
    kindString: string;
    more: ASTMoreBinaryTest;
    OpPos: ASTPos;
    Op: string;
    OpString: string;
    X: ASTNodeTestExpr;
    Y: ASTNodeTestExpr;
    constructor(binarytest: IBinaryTest, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeBinaryTest.d.ts.map