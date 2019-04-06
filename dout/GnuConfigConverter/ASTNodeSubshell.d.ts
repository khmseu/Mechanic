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
import { ISubshell } from "./ParserTypes";
export declare class ASTNodeSubshell extends ASTNode {
    kind: ASTnodeKind.ASTNodeSubshell;
    Lparen: ASTPos;
    Rparen: ASTPos;
    StmtList: ASTNodeStmtList | null;
    Last: ASTNodeComment[];
    constructor(subshell: ISubshell);
}
//# sourceMappingURL=ASTNodeSubshell.d.ts.map