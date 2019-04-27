/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreStmtList } from "./ASTMoreStmtList";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { IStmtList } from "./ParserTypes";
export declare class ASTNodeStmtList extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeStmtList;
    kindString: string;
    more: ASTMoreStmtList;
    Stmts: ASTNodeStmt[];
    Last: ASTNodeComment[];
    constructor(stmtlist: IStmtList, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeStmtList.d.ts.map