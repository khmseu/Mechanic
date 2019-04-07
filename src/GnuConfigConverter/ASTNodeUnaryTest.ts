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
import { op, Token } from "./Token";

export class ASTNodeUnaryTest extends ASTNode {
  public kind: ASTnodeKind.ASTNodeUnaryTest = ASTnodeKind.ASTNodeUnaryTest;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeUnaryTest];
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: string; //     Op: UnTestOperator;
  public OpString: string;
  public X: ASTNodeTestExpr; //     X: ITestExpr;

  constructor(unarytest: IUnaryTest) {
    super(unarytest);
    logg("ASTNodeUnaryTest");
    this.OpPos = ASTSimpleSingle(ASTPos, unarytest.OpPos)!;
    this.Op = UnTestOperator[unarytest.Op];
    this.OpString = op((unarytest.Op as unknown) as Token);
    this.X = ASTSingle(ASTNodeTestExpr, unarytest.X)!;
  }
}
