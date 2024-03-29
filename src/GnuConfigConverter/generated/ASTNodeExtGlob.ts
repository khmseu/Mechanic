/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { GlobOperator, IExtGlob } from "../ParserTypes";
import { op, Token } from "../Token";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeExtGlob extends ASTNode {
  public kind: ASTnodeKind.ASTNodeExtGlob = ASTnodeKind.ASTNodeExtGlob;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeExtGlob];
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: string; //     Op: GlobOperator;
  public OpString: string;
  public Pattern: ASTNodeLit | null; //     Pattern: ILit | null;

  constructor(extglob: IExtGlob, public parent: ASTNode | null, public parentField: string) {
    super(extglob, parent, parentField);
    logg("ASTNodeExtGlob");
    this.OpPos = ASTSimpleSingleNotNull(ASTPos, extglob.OpPos);
    this.Op = GlobOperator[extglob.Op];
    this.OpString = op((extglob.Op as unknown) as Token);
    this.Pattern = ASTSingle(ASTNodeLit, extglob.Pattern, this, "Pattern");
    ["kind", "parent", "parentField", "OpPos"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeExtGlobPre(this);
    visitor.visitAllPreAfter(this);
    if (this.Pattern) {
      this.Pattern.accept(visitor);
    }
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeExtGlobPost(this);
    visitor.visitAllPostAfter(this);
  }
}
