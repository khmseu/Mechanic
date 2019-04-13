/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreWord } from "./ASTMoreWord";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTNodeWordPart } from "./ASTNodeWordPart";
import { IWord } from "./ParserTypes";
export declare class ASTNodeWord extends ASTNode {
    kind: ASTnodeKind.ASTNodeWord;
    kindString: string;
    more: ASTMoreWord;
    Parts: ASTNodeWordPart[];
    SplitBraces: ASTNodeWord | null;
    Lit: string | null;
    constructor(word: IWord);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeWord.d.ts.map