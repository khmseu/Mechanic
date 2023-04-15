/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IBraceExp } from "../ParserTypes";
import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeBraceExp extends ASTNode {
  public kind: ASTnodeKind.ASTNodeBraceExp = ASTnodeKind.ASTNodeBraceExp;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeBraceExp];
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
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeBraceExpPre(this);
    visitor.visitAllPreAfter(this);
    this.Elems.forEach((e) => e.accept(visitor));
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeBraceExpPost(this);
    visitor.visitAllPostAfter(this);
  }
}
