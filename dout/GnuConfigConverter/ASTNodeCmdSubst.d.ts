/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTPos } from "./ASTPos";
import { ICmdSubst } from "./ParserTypes";
export declare class ASTNodeCmdSubst extends ASTNode {
    kind: ASTnodeKind.ASTNodeCmdSubst;
    kindString: string;
    Left: ASTPos;
    Right: ASTPos;
    StmtList: ASTNodeStmtList | null;
    Last: ASTNodeComment[];
    TempFile: boolean;
    ReplyVar: boolean;
    constructor(cmdsubst: ICmdSubst);
}
//# sourceMappingURL=ASTNodeCmdSubst.d.ts.map