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
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { IWhileClause } from "./ParserTypes";
export declare class ASTNodeWhileClause extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
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
    constructor(whileclause: IWhileClause, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeWhileClause.d.ts.map