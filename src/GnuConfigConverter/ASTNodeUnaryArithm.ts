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
import { op, Token } from "./Token";

export class ASTNodeUnaryArithm extends ASTNode {
  public kind: ASTnodeKind.ASTNodeUnaryArithm = ASTnodeKind.ASTNodeUnaryArithm;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeUnaryArithm];
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: string; //     Op: UnAritOperator;
  public OpString: string;
  public Post: boolean; //     Post: boolean;
  public X: ASTNodeArithmExpr; //     X: IArithmExpr;

  constructor(unaryarithm: IUnaryArithm) {
    super(unaryarithm);
    logg("ASTNodeUnaryArithm");
    this.OpPos = ASTSimpleSingle(ASTPos, unaryarithm.OpPos)!;
    this.Op = UnAritOperator[unaryarithm.Op];
    this.OpString = op((unaryarithm.Op as unknown) as Token);
    this.Post = unaryarithm.Post;
    this.X = ASTSingle(ASTNodeArithmExpr, unaryarithm.X)!;
  }
}
