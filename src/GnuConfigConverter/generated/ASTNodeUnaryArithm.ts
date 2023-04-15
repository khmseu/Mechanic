/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IUnaryArithm, UnAritOperator } from "../ParserTypes";
import { op, Token } from "../Token";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingleNotNull } from "./ASTSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeUnaryArithm extends ASTNode {
  public kind: ASTnodeKind.ASTNodeUnaryArithm = ASTnodeKind.ASTNodeUnaryArithm;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeUnaryArithm];
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: string; //     Op: UnAritOperator;
  public OpString: string;
  public Post: boolean; //     Post: boolean;
  public X: ASTNodeArithmExpr; //     X: IArithmExpr;

  constructor(unaryarithm: IUnaryArithm, public parent: ASTNode | null, public parentField: string) {
    super(unaryarithm, parent, parentField);
    logg("ASTNodeUnaryArithm");
    this.OpPos = ASTSimpleSingleNotNull(ASTPos, unaryarithm.OpPos);
    this.Op = UnAritOperator[unaryarithm.Op];
    this.OpString = op((unaryarithm.Op as unknown) as Token);
    this.Post = unaryarithm.Post;
    this.X = ASTSingleNotNull(ASTNodeArithmExpr, unaryarithm.X, this, "X");
    ["kind", "parent", "parentField", "OpPos"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeUnaryArithmPre(this);
    visitor.visitAllPreAfter(this);
    this.X.accept(visitor);
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeUnaryArithmPost(this);
    visitor.visitAllPostAfter(this);
  }
}
