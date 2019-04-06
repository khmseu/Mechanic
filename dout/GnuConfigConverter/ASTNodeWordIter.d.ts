/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { IWordIter } from "./ParserTypes";
export declare class ASTNodeWordIter extends ASTNode {
    kind: ASTnodeKind.ASTNodeWordIter;
    Name: ASTNodeLit | null;
    InPos: ASTPos;
    Items: ASTNodeWord[];
    constructor(worditer: IWordIter);
}
//# sourceMappingURL=ASTNodeWordIter.d.ts.map