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
import { IProcSubst } from "./ParserTypes";
export declare class ASTNodeProcSubst extends ASTNode {
    kind: ASTnodeKind.ASTNodeProcSubst;
    kindString: string;
    OpPos: ASTPos;
    Rparen: ASTPos;
    Op: string;
    OpString: string;
    Stmts: ASTNodeStmt[];
    Last: ASTNodeComment[];
    constructor(procsubst: IProcSubst);
}
//# sourceMappingURL=ASTNodeProcSubst.d.ts.map