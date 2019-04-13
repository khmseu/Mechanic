/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreCmdSubst } from "./ASTMoreCmdSubst";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ICmdSubst } from "./ParserTypes";
export declare class ASTNodeCmdSubst extends ASTNode {
    kind: ASTnodeKind.ASTNodeCmdSubst;
    kindString: string;
    more: ASTMoreCmdSubst;
    Left: ASTPos;
    Right: ASTPos;
    StmtList: ASTNodeStmtList | null;
    Last: ASTNodeComment[];
    TempFile: boolean;
    ReplyVar: boolean;
    constructor(cmdsubst: ICmdSubst);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeCmdSubst.d.ts.map