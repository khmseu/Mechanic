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
import { ITestClause } from "./ParserTypes";
export declare class ASTNodeTestClause extends ASTNode {
    kind: ASTnodeKind.ASTNodeTestClause;
    Left: ASTPos;
    Right: ASTPos;
    X: ASTNodeTestExpr;
    constructor(testclause: ITestClause);
}
//# sourceMappingURL=ASTNodeTestClause.d.ts.map