/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IUnaryArithm, UnAritOperator } from "./ParserTypes";

export class ASTNodeUnaryArithm extends ASTNode {
  public kind: ASTnodeKind.ASTNodeUnaryArithm = ASTnodeKind.ASTNodeUnaryArithm;
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: UnAritOperator; //     Op: UnAritOperator;
  public Post: boolean; //     Post: boolean;
  public X: ASTNodeArithmExpr; //     X: IArithmExpr;

  constructor(unaryarithm: IUnaryArithm) {
    super(unaryarithm);
    logg("ASTNodeUnaryArithm");
    const { OpPos, Op, Post, X, ...rest_unaryarithm } = unaryarithm;
    this.OpPos = ASTSimpleSingle(ASTPos, OpPos)!;
    this.Op = Op;
    this.Post = Post;
    this.X = ASTSingle(ASTNodeArithmExpr, X)!;
    this.rest = rest_unaryarithm;
  }
}
