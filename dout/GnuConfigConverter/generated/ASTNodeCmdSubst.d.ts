/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ICmdSubst } from "../ParserTypes";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTNodeCmdSubst extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeCmdSubst;
    kindString: string;
    Left: ASTPos;
    Right: ASTPos;
    StmtList: ASTNodeStmtList | null;
    Last: ASTNodeComment[];
    TempFile: boolean;
    ReplyVar: boolean;
    constructor(cmdsubst: ICmdSubst, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeCmdSubst.d.ts.map