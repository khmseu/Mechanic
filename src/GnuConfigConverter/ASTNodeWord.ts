/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTMoreWord } from "./ASTMoreWord";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTNodeWordPart } from "./ASTNodeWordPart";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IWord } from "./ParserTypes";

export class ASTNodeWord extends ASTNode {
  public kind: ASTnodeKind.ASTNodeWord = ASTnodeKind.ASTNodeWord;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeWord];
  public more: ASTMoreWord = new ASTMoreWord();
  public Parts: ASTNodeWordPart[]; //     Parts: IWordPart[];
  public SplitBraces: ASTNodeWord | null; //     SplitBraces: (() => IWord) | null;
  public Lit: string | null; //     Lit: (() => string) | null;

  constructor(word: IWord, public parent: ASTNode | null) {
    super(word, parent);
    logg("ASTNodeWord");
    this.Parts = ASTArray(ASTNodeWordPart, word.Parts, this)!;
    this.SplitBraces = word.SplitBraces ? ASTSingle(ASTNodeWord, word.SplitBraces(), this) : null;
    this.Lit = word.Lit ? word.Lit() : null;
    [].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeWordPre(this);
    this.Parts.forEach((e) => e.accept(visitor));
    if (this.SplitBraces) {
      this.SplitBraces.accept(visitor);
    }
    visitor.visitASTNodeWordPost(this);
  }
}
