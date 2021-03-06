/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreIfClause } from "./ASTMoreIfClause";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { IIfClause } from "./ParserTypes";
export declare class ASTNodeIfClause extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeIfClause;
    kindString: string;
    more: ASTMoreIfClause;
    Position: ASTPos;
    ThenPos: ASTPos;
    FiPos: ASTPos;
    Cond: ASTNodeStmtList | null;
    CondLast: ASTNodeComment[];
    Then: ASTNodeStmtList | null;
    ThenLast: ASTNodeComment[];
    Else: ASTNodeIfClause | null;
    Last: ASTNodeComment[];
    constructor(ifclause: IIfClause, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeIfClause.d.ts.map