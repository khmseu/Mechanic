/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreForClause } from "./ASTMoreForClause";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLoop } from "./ASTNodeLoop";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IForClause } from "./ParserTypes";
export declare class ASTNodeForClause extends ASTNode {
    kind: ASTnodeKind.ASTNodeForClause;
    kindString: string;
    more: ASTMoreForClause;
    ForPos: ASTPos;
    DoPos: ASTPos;
    DonePos: ASTPos;
    Select: boolean;
    Loop: ASTNodeLoop;
    Do: ASTNodeStmtList | null;
    DoLast: ASTNodeComment[];
    constructor(forclause: IForClause);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeForClause.d.ts.map