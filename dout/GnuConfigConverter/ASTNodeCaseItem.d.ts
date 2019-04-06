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
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { CaseOperator, ICaseItem } from "./ParserTypes";
export declare class ASTNodeCaseItem extends ASTNode {
    kind: ASTnodeKind.ASTNodeCaseItem;
    Op: CaseOperator;
    OpPos: ASTPos;
    Comments: ASTNodeComment[];
    Patterns: ASTNodeWord[];
    StmtList: ASTNodeStmtList | null;
    Last: ASTNodeComment[];
    constructor(caseitem: ICaseItem);
}
//# sourceMappingURL=ASTNodeCaseItem.d.ts.map