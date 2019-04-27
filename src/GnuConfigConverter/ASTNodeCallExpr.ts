/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTMoreCallExpr } from "./ASTMoreCallExpr";
import { ASTNode } from "./ASTNode";
import { ASTNodeAssign } from "./ASTNodeAssign";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { logg } from "./logg";
import { ICallExpr } from "./ParserTypes";

export class ASTNodeCallExpr extends ASTNode {
  public kind: ASTnodeKind.ASTNodeCallExpr = ASTnodeKind.ASTNodeCallExpr;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeCallExpr];
  public more: ASTMoreCallExpr = new ASTMoreCallExpr();
  public Assigns: ASTNodeAssign[]; //     Assigns: IAssign[] | null;
  public Args: ASTNodeWord[]; //     Args: IWord[] | null;

  constructor(callexpr: ICallExpr, public parent: ASTNode | null, public parentField: string) {
    super(callexpr, parent, parentField);
    logg("ASTNodeCallExpr");
    this.Assigns = ASTArray(ASTNodeAssign, callexpr.Assigns, this, "Assigns");
    this.Args = ASTArray(ASTNodeWord, callexpr.Args, this, "Args");
    ["kind", "parent", "parentField"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitASTNodeCallExprPre(this);
    this.Assigns.forEach((e) => e.accept(visitor));
    this.Args.forEach((e) => e.accept(visitor));
    visitor.visitASTNodeCallExprPost(this);
  }
}
