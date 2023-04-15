/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./generated/ASTNode";
import { ASTVisitorBase } from "./generated/ASTVisitorBase";
export declare class ASTVisitorPrint extends ASTVisitorBase {
    private cb;
    constructor(cb: (stuff: any) => void);
    visitAllPostAfter(node: ASTNode): void;
    visitASTNodeCommentPost(node: ASTNode): void;
    visitASTNodeStmtPost(node: ASTNode): void;
    visitASTNodeCaseItemPost(node: ASTNode): void;
    visitASTNodeIfClausePost(node: ASTNode): void;
    visitASTNodeStmtListPost(node: ASTNode): void;
    private pull;
    private cbc;
    private combine;
}
//# sourceMappingURL=ASTVisitorPrint.d.ts.map