/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreWhileClause } from "./ASTMoreWhileClause";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IWhileClause } from "./ParserTypes";
export declare class ASTNodeWhileClause extends ASTNode {
    kind: ASTnodeKind.ASTNodeWhileClause;
    kindString: string;
    more: ASTMoreWhileClause;
    WhilePos: ASTPos;
    DoPos: ASTPos;
    DonePos: ASTPos;
    Until: boolean;
    Cond: ASTNodeStmtList | null;
    CondLast: ASTNodeComment[];
    Do: ASTNodeStmtList | null;
    DoLast: ASTNodeComment[];
    constructor(whileclause: IWhileClause);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeWhileClause.d.ts.map