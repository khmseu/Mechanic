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
import { BinAritOperator, IBinaryArithm } from "./ParserTypes";

export class ASTNodeBinaryArithm extends ASTNode {
  public kind: ASTnodeKind.ASTNodeBinaryArithm = ASTnodeKind.ASTNodeBinaryArithm;
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: BinAritOperator; //     Op: BinAritOperator;
  public X: ASTNodeArithmExpr; //     X: IArithmExpr;
  public Y: ASTNodeArithmExpr; //     Y: IArithmExpr;

  constructor(binaryarithm: IBinaryArithm) {
    super(binaryarithm);
    logg("ASTNodeBinaryArithm");
    const { OpPos, Op, X, Y, ...rest_binaryarithm } = binaryarithm;
    this.OpPos = ASTSimpleSingle(ASTPos, OpPos)!;
    this.Op = Op;
    this.X = ASTSingle(ASTNodeArithmExpr, X)!;
    this.Y = ASTSingle(ASTNodeArithmExpr, Y)!;
    this.rest = rest_binaryarithm;
  }
}
