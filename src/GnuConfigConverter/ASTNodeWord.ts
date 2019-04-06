/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWordPart } from "./ASTNodeWordPart";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IWord } from "./ParserTypes";

export class ASTNodeWord extends ASTNode {
  public kind: ASTnodeKind.ASTNodeWord = ASTnodeKind.ASTNodeWord;
  public Parts: ASTNodeWordPart[]; //     Parts: IWordPart[];
  public SplitBraces: ASTNodeWord | null; //     SplitBraces: () => IWord | null;
  public Lit: string; //     Lit: () => string;

  constructor(word: IWord) {
    super(word);
    logg("ASTNodeWord");
    const { Parts, SplitBraces, Lit, ...rest_word } = word;
    this.Parts = ASTArray(ASTNodeWordPart, Parts)!;
    this.SplitBraces = ASTSingle(ASTNodeWord, SplitBraces());
    this.Lit = Lit();
    this.rest = rest_word;
  }
}
