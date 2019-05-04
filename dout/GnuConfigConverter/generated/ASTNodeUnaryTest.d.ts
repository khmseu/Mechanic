/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { IUnaryTest } from "../ParserTypes";
import { ASTMoreUnaryTest } from "./ASTMoreUnaryTest";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeTestExpr } from "./ASTNodeTestExpr";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTNodeUnaryTest extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeUnaryTest;
    kindString: string;
    more: ASTMoreUnaryTest;
    OpPos: ASTPos;
    Op: string;
    OpString: string;
    X: ASTNodeTestExpr;
    constructor(unarytest: IUnaryTest, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeUnaryTest.d.ts.map