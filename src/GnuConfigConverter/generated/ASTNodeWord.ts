/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTCall } from "./ASTCall";
import { ASTMoreWord } from "./ASTMoreWord";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWordPart } from "./ASTNodeWordPart";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { logg } from "./logg";
import { IWord } from "./ParserTypes";

export class ASTNodeWord extends ASTNode {
  public kind: ASTnodeKind.ASTNodeWord = ASTnodeKind.ASTNodeWord;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeWord];
  public more: ASTMoreWord = new ASTMoreWord();
  public Parts: ASTNodeWordPart[]; //     Parts: IWordPart[];
  public SplitBraces: ASTNodeWord | null; //     SplitBraces: (() => IWord) | null;
  public Lit: string | null; //     Lit: (() => string) | null;

  constructor(word: IWord, public parent: ASTNode | null, public parentField: string) {
    super(word, parent, parentField);
    logg("ASTNodeWord");
    this.Parts = ASTArray(ASTNodeWordPart, word.Parts, this, "Parts");
    this.SplitBraces = ASTSingle(ASTNodeWord, ASTCall(word.SplitBraces), this, "SplitBraces");
    this.Lit = word.Lit ? ASTCall(word.Lit) : null;
    ["kind", "parent", "parentField"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPre(this);
    visitor.visitASTNodeWordPre(this);
    this.Parts.forEach((e) => e.accept(visitor));
    if (this.SplitBraces) {
      this.SplitBraces.accept(visitor);
    }
    visitor.visitASTNodeWordPost(this);
    visitor.visitAllPost(this);
  }
}
