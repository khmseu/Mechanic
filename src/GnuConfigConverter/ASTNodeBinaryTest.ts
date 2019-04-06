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

export class ASTNodeBinaryTest extends ASTNode {
  public kind: ASTnodeKind.ASTNodeBinaryTest = ASTnodeKind.ASTNodeBinaryTest;
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: BinTestOperator; //     Op: BinTestOperator;
  public X: ASTNodeTestExpr; //     X: ITestExpr;
  public Y: ASTNodeTestExpr; //     Y: ITestExpr;

  constructor(binarytest: IBinaryTest) {
    super(binarytest);
    logg("ASTNodeBinaryTest");
    const { OpPos, Op, X, Y, ...rest_binarytest } = binarytest;
    this.OpPos = ASTSimpleSingle(ASTPos, OpPos)!;
    this.Op = Op;
    this.X = ASTSingle(ASTNodeTestExpr, X)!;
    this.Y = ASTSingle(ASTNodeTestExpr, Y)!;
    this.rest = rest_binarytest;
  }
}
