/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreTestClause } from "./ASTMoreTestClause";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeTestExpr } from "./ASTNodeTestExpr";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ITestClause } from "./ParserTypes";
export declare class ASTNodeTestClause extends ASTNode {
    kind: ASTnodeKind.ASTNodeTestClause;
    kindString: string;
    more: ASTMoreTestClause;
    Left: ASTPos;
    Right: ASTPos;
    X: ASTNodeTestExpr;
    constructor(testclause: ITestClause);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeTestClause.d.ts.map