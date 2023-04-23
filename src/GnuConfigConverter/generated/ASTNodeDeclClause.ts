/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IDeclClause } from "../ParserTypes";
import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeAssign } from "./ASTNodeAssign";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeDeclClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeDeclClause = ASTnodeKind.ASTNodeDeclClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeDeclClause];
  public Variant: ASTNodeLit | null; //     Variant: ILit | null;
  public Opts: ASTNodeWord[]; //     Opts: IWord[] | null;
  public Assigns: ASTNodeAssign[]; //     Assigns: IAssign[] | null;

  constructor(declclause: IDeclClause, public parent: ASTNode | null, public parentField: string) {
    super(declclause, parent, parentField);
    logg("ASTNodeDeclClause");
    this.Variant = ASTSingle(ASTNodeLit, declclause.Variant, this, "Variant");
    this.Opts = ASTArray(ASTNodeWord, declclause.Opts, this, "Opts");
    this.Assigns = ASTArray(ASTNodeAssign, declclause.Assigns, this, "Assigns");
    ["kind", "parent", "parentField"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeDeclClausePre(this);
    visitor.visitAllPreAfter(this);
    if (this.Assigns) {
      this.Assigns.accept(visitor);
    }
    this.Assigns.forEach((e) => e.accept(visitor));
    this.Assigns.forEach((e) => e.accept(visitor));
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeDeclClausePost(this);
    visitor.visitAllPostAfter(this);
  }
}
