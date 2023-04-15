/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IWord } from "../ParserTypes";
import { ASTArray } from "./ASTArray";
import { ASTCall } from "./ASTCall";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWordPart } from "./ASTNodeWordPart";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeWord extends ASTNode {
  public kind: ASTnodeKind.ASTNodeWord = ASTnodeKind.ASTNodeWord;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeWord];
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
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeWordPre(this);
    visitor.visitAllPreAfter(this);
    this.Parts.forEach((e) => e.accept(visitor));
    if (this.SplitBraces) {
      this.SplitBraces.accept(visitor);
    }
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeWordPost(this);
    visitor.visitAllPostAfter(this);
  }
}
