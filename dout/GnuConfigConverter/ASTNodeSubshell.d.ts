/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreSubshell } from "./ASTMoreSubshell";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ISubshell } from "./ParserTypes";
export declare class ASTNodeSubshell extends ASTNode {
    kind: ASTnodeKind.ASTNodeSubshell;
    kindString: string;
    more: ASTMoreSubshell;
    Lparen: ASTPos;
    Rparen: ASTPos;
    StmtList: ASTNodeStmtList | null;
    Last: ASTNodeComment[];
    constructor(subshell: ISubshell);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeSubshell.d.ts.map