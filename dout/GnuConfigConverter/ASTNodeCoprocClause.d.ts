/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreCoprocClause } from "./ASTMoreCoprocClause";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { ICoprocClause } from "./ParserTypes";
export declare class ASTNodeCoprocClause extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeCoprocClause;
    kindString: string;
    more: ASTMoreCoprocClause;
    Coproc: ASTPos;
    Name: ASTNodeWord | null;
    Stmt: ASTNodeStmt | null;
    constructor(coprocclause: ICoprocClause, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeCoprocClause.d.ts.map