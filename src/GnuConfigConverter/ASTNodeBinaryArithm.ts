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
import { op, Token } from "./Token";

export class ASTNodeBinaryArithm extends ASTNode {
  public kind: ASTnodeKind.ASTNodeBinaryArithm = ASTnodeKind.ASTNodeBinaryArithm;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeBinaryArithm];
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: string; //     Op: BinAritOperator;
  public OpString: string;
  public X: ASTNodeArithmExpr; //     X: IArithmExpr;
  public Y: ASTNodeArithmExpr; //     Y: IArithmExpr;

  constructor(binaryarithm: IBinaryArithm) {
    super(binaryarithm);
    logg("ASTNodeBinaryArithm");
    this.OpPos = ASTSimpleSingle(ASTPos, binaryarithm.OpPos)!;
    this.Op = BinAritOperator[binaryarithm.Op];
    this.OpString = op((binaryarithm.Op as unknown) as Token);
    this.X = ASTSingle(ASTNodeArithmExpr, binaryarithm.X)!;
    this.Y = ASTSingle(ASTNodeArithmExpr, binaryarithm.Y)!;
  }
}
