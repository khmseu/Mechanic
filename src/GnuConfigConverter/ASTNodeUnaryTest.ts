/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeTestExpr } from "./ASTNodeTestExpr";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IUnaryTest, UnTestOperator } from "./ParserTypes";

export class ASTNodeUnaryTest extends ASTNode {
  public kind: ASTnodeKind.ASTNodeUnaryTest = ASTnodeKind.ASTNodeUnaryTest;
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: UnTestOperator; //     Op: UnTestOperator;
  public X: ASTNodeTestExpr; //     X: ITestExpr;

  constructor(unarytest: IUnaryTest) {
    super(unarytest);
    logg("ASTNodeUnaryTest");
    const { OpPos, Op, X, ...rest_unarytest } = unarytest;
    this.OpPos = ASTSimpleSingle(ASTPos, OpPos)!;
    this.Op = Op;
    this.X = ASTSingle(ASTNodeTestExpr, X)!;
    this.rest = rest_unarytest;
  }
}
