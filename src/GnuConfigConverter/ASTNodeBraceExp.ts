/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTMoreBraceExp } from "./ASTMoreBraceExp";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { logg } from "./logg";
import { IBraceExp } from "./ParserTypes";

export class ASTNodeBraceExp extends ASTNode {
  public kind: ASTnodeKind.ASTNodeBraceExp = ASTnodeKind.ASTNodeBraceExp;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeBraceExp];
  public more: ASTMoreBraceExp = new ASTMoreBraceExp();
  public Sequence: boolean; //     Sequence: boolean;
  public Chars: boolean; //     Chars: boolean;
  public Elems: ASTNodeWord[]; //     Elems: IWord[] | null;

  constructor(braceexp: IBraceExp, public parent: ASTNode | null, public parentField: string) {
    super(braceexp, parent, parentField);
    logg("ASTNodeBraceExp");
    this.Sequence = braceexp.Sequence;
    this.Chars = braceexp.Chars;
    this.Elems = ASTArray(ASTNodeWord, braceexp.Elems, this, "Elems");
    ["kind", "parent", "parentField"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitASTNodeBraceExpPre(this);
    this.Elems.forEach((e) => e.accept(visitor));
    visitor.visitASTNodeBraceExpPost(this);
  }
}
