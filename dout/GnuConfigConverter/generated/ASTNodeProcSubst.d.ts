/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { IProcSubst } from "../ParserTypes";
import { ASTMoreProcSubst } from "./ASTMoreProcSubst";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTNodeProcSubst extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeProcSubst;
    kindString: string;
    more: ASTMoreProcSubst;
    OpPos: ASTPos;
    Rparen: ASTPos;
    Op: string;
    OpString: string;
    Stmts: ASTNodeStmt[];
    Last: ASTNodeComment[];
    constructor(procsubst: IProcSubst, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeProcSubst.d.ts.map