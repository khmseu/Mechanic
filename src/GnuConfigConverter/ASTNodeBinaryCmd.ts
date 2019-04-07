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
import { op, Token } from "./Token";

export class ASTNodeBinaryCmd extends ASTNode {
  public kind: ASTnodeKind.ASTNodeBinaryCmd = ASTnodeKind.ASTNodeBinaryCmd;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeBinaryCmd];
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: string; //     Op: BinCmdOperator;
  public OpString: string;
  public X: ASTNodeStmt; //     X: IStmt;
  public Y: ASTNodeStmt; //     Y: IStmt;

  constructor(binarycmd: IBinaryCmd) {
    super(binarycmd);
    logg("ASTNodeBinaryCmd");
    this.OpPos = ASTSimpleSingle(ASTPos, binarycmd.OpPos)!;
    this.Op = BinCmdOperator[binarycmd.Op];
    this.OpString = op((binarycmd.Op as unknown) as Token);
    this.X = ASTSingle(ASTNodeStmt, binarycmd.X)!;
    this.Y = ASTSingle(ASTNodeStmt, binarycmd.Y)!;
  }
}
