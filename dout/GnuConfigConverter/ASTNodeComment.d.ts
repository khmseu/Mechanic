/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreComment } from "./ASTMoreComment";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IComment } from "./ParserTypes";
export declare class ASTNodeComment extends ASTNode {
    kind: ASTnodeKind.ASTNodeComment;
    kindString: string;
    more: ASTMoreComment;
    Hash: ASTPos;
    Text: string;
    constructor(comment: IComment);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeComment.d.ts.map