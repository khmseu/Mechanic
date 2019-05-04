/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { IWord } from "../ParserTypes";
import { ASTMoreWord } from "./ASTMoreWord";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWordPart } from "./ASTNodeWordPart";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTNodeWord extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeWord;
    kindString: string;
    more: ASTMoreWord;
    Parts: ASTNodeWordPart[];
    SplitBraces: ASTNodeWord | null;
    Lit: string | null;
    constructor(word: IWord, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeWord.d.ts.map