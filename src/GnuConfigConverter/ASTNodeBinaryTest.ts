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
import { BinTestOperator, IBinaryTest } from "./ParserTypes";
import { op, Token } from "./Token";

export class ASTNodeBinaryTest extends ASTNode {
  public kind: ASTnodeKind.ASTNodeBinaryTest = ASTnodeKind.ASTNodeBinaryTest;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeBinaryTest];
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: string; //     Op: BinTestOperator;
  public OpString: string;
  public X: ASTNodeTestExpr; //     X: ITestExpr;
  public Y: ASTNodeTestExpr; //     Y: ITestExpr;

  constructor(binarytest: IBinaryTest) {
    super(binarytest);
    logg("ASTNodeBinaryTest");
    this.OpPos = ASTSimpleSingle(ASTPos, binarytest.OpPos)!;
    this.Op = BinTestOperator[binarytest.Op];
    this.OpString = op((binarytest.Op as unknown) as Token);
    this.X = ASTSingle(ASTNodeTestExpr, binarytest.X)!;
    this.Y = ASTSingle(ASTNodeTestExpr, binarytest.Y)!;
  }
}
