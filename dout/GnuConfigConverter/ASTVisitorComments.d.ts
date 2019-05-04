/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTVisitorComments extends ASTVisitorBase {
    visitASTNodeCommentPre(node: ASTNodeComment): void;
    visitAllPost(node: ASTNode): void;
}
//# sourceMappingURL=ASTVisitorComments.d.ts.map