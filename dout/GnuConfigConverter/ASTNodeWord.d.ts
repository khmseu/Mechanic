/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWordPart } from "./ASTNodeWordPart";
import { IWord } from "./ParserTypes";
export declare class ASTNodeWord extends ASTNode {
    kind: ASTnodeKind.ASTNodeWord;
    Parts: ASTNodeWordPart[];
    SplitBraces: ASTNodeWord | null;
    Lit: string;
    constructor(word: IWord);
}
//# sourceMappingURL=ASTNodeWord.d.ts.map