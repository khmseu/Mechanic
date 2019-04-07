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
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeWord];
  public Parts: ASTNodeWordPart[]; //     Parts: IWordPart[];
  public SplitBraces: ASTNodeWord | null; //     SplitBraces: (() => IWord) | null;
  public Lit: string | null; //     Lit: (() => string) | null;

  constructor(word: IWord) {
    super(word);
    logg("ASTNodeWord");
    this.Parts = ASTArray(ASTNodeWordPart, word.Parts)!;
    this.SplitBraces = word.SplitBraces ? ASTSingle(ASTNodeWord, word.SplitBraces()) : null;
    this.Lit = word.Lit ? word.Lit() : null;
  }
}
