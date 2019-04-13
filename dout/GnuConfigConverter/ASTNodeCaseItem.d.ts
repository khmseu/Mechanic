/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreCaseItem } from "./ASTMoreCaseItem";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ICaseItem } from "./ParserTypes";
export declare class ASTNodeCaseItem extends ASTNode {
    kind: ASTnodeKind.ASTNodeCaseItem;
    kindString: string;
    more: ASTMoreCaseItem;
    Op: string;
    OpString: string;
    OpPos: ASTPos;
    Comments: ASTNodeComment[];
    Patterns: ASTNodeWord[];
    StmtList: ASTNodeStmtList | null;
    Last: ASTNodeComment[];
    constructor(caseitem: ICaseItem);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeCaseItem.d.ts.map