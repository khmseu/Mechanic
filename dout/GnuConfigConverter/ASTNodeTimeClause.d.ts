/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreTimeClause } from "./ASTMoreTimeClause";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { ITimeClause } from "./ParserTypes";
export declare class ASTNodeTimeClause extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeTimeClause;
    kindString: string;
    more: ASTMoreTimeClause;
    Time: ASTPos;
    PosixFormat: boolean;
    Stmt: ASTNodeStmt | null;
    constructor(timeclause: ITimeClause, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeTimeClause.d.ts.map