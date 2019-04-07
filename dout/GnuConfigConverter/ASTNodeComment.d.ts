/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { IComment } from "./ParserTypes";
export declare class ASTNodeComment extends ASTNode {
    kind: ASTnodeKind.ASTNodeComment;
    kindString: string;
    Hash: ASTPos;
    Text: string;
    constructor(comment: IComment);
}
//# sourceMappingURL=ASTNodeComment.d.ts.map