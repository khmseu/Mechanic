/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { BinCmdOperator, IBinaryCmd } from "./ParserTypes";

export class ASTNodeBinaryCmd extends ASTNode {
  public kind: ASTnodeKind.ASTNodeBinaryCmd = ASTnodeKind.ASTNodeBinaryCmd;
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: BinCmdOperator; //     Op: BinCmdOperator;
  public X: ASTNodeStmt; //     X: IStmt;
  public Y: ASTNodeStmt; //     Y: IStmt;

  constructor(binarycmd: IBinaryCmd) {
    super(binarycmd);
    logg("ASTNodeBinaryCmd");
    const { OpPos, Op, X, Y, ...rest_binarycmd } = binarycmd;
    this.OpPos = ASTSimpleSingle(ASTPos, OpPos)!;
    this.Op = Op;
    this.X = ASTSingle(ASTNodeStmt, X)!;
    this.Y = ASTSingle(ASTNodeStmt, Y)!;
    this.rest = rest_binarycmd;
  }
}
