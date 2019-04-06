/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ICoprocClause } from "./ParserTypes";
export declare class ASTNodeCoprocClause extends ASTNode {
    kind: ASTnodeKind.ASTNodeCoprocClause;
    Coproc: ASTPos;
    Name: ASTNodeWord | null;
    Stmt: ASTNodeStmt | null;
    constructor(coprocclause: ICoprocClause);
}
//# sourceMappingURL=ASTNodeCoprocClause.d.ts.map