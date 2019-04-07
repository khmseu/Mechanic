/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTPos } from "./ASTPos";
import { ITimeClause } from "./ParserTypes";
export declare class ASTNodeTimeClause extends ASTNode {
    kind: ASTnodeKind.ASTNodeTimeClause;
    kindString: string;
    Time: ASTPos;
    PosixFormat: boolean;
    Stmt: ASTNodeStmt | null;
    constructor(timeclause: ITimeClause);
}
//# sourceMappingURL=ASTNodeTimeClause.d.ts.map