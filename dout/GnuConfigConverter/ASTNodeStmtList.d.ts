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
import { IStmtList } from "./ParserTypes";
export declare class ASTNodeStmtList extends ASTNode {
    kind: ASTnodeKind.ASTNodeStmtList;
    Stmts: ASTNodeStmt[];
    Last: ASTNodeComment[];
    constructor(stmtlist: IStmtList);
}
//# sourceMappingURL=ASTNodeStmtList.d.ts.map