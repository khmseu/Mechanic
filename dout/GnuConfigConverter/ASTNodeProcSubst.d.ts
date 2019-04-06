/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTPos } from "./ASTPos";
import { IProcSubst, ProcOperator } from "./ParserTypes";
export declare class ASTNodeProcSubst extends ASTNode {
    kind: ASTnodeKind.ASTNodeProcSubst;
    OpPos: ASTPos;
    Rparen: ASTPos;
    Op: ProcOperator;
    Stmts: ASTNodeStmt[];
    Last: ASTNodeComment[];
    constructor(procsubst: IProcSubst);
}
//# sourceMappingURL=ASTNodeProcSubst.d.ts.map