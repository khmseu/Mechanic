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
import { IArithmCmd } from "./ParserTypes";

export class ASTNodeArithmCmd extends ASTNode {
  public kind: ASTnodeKind.ASTNodeArithmCmd = ASTnodeKind.ASTNodeArithmCmd;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeArithmCmd];
  public Left: ASTPos; //     Left: I_Pos;
  public Right: ASTPos; //     Right: I_Pos;
  public Unsigned: boolean; //     Unsigned: boolean;
  public X: ASTNodeArithmExpr; //     X: IArithmExpr;

  constructor(arithmcmd: IArithmCmd) {
    super(arithmcmd);
    logg("ASTNodeArithmCmd");
    this.Left = ASTSimpleSingle(ASTPos, arithmcmd.Left)!;
    this.Right = ASTSimpleSingle(ASTPos, arithmcmd.Right)!;
    this.Unsigned = arithmcmd.Unsigned;
    this.X = ASTSingle(ASTNodeArithmExpr, arithmcmd.X)!;
  }
}
