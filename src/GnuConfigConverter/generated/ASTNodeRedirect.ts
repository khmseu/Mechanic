/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IRedirect, RedirOperator } from "../ParserTypes";
import { op, Token } from "../Token";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeRedirect extends ASTNode {
  public kind: ASTnodeKind.ASTNodeRedirect = ASTnodeKind.ASTNodeRedirect;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeRedirect];
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: string; //     Op: RedirOperator;
  public OpString: string;
  public N: ASTNodeLit | null; //     N: ILit | null;
  public Word: ASTNodeWord | null; //     Word: IWord | null;
  public Hdoc: ASTNodeWord | null; //     Hdoc: IWord | null;

  constructor(redirect: IRedirect, public parent: ASTNode | null, public parentField: string) {
    super(redirect, parent, parentField);
    logg("ASTNodeRedirect");
    this.OpPos = ASTSimpleSingleNotNull(ASTPos, redirect.OpPos);
    this.Op = RedirOperator[redirect.Op];
    this.OpString = op((redirect.Op as unknown) as Token);
    this.N = ASTSingle(ASTNodeLit, redirect.N, this, "N");
    this.Word = ASTSingle(ASTNodeWord, redirect.Word, this, "Word");
    this.Hdoc = ASTSingle(ASTNodeWord, redirect.Hdoc, this, "Hdoc");
    ["kind", "parent", "parentField", "OpPos"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeRedirectPre(this);
    visitor.visitAllPreAfter(this);
    if (this.N) {
      this.N.accept(visitor);
    }
    if (this.Word) {
      this.Word.accept(visitor);
    }
    if (this.Hdoc) {
      this.Hdoc.accept(visitor);
    }
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeRedirectPost(this);
    visitor.visitAllPostAfter(this);
  }
}
