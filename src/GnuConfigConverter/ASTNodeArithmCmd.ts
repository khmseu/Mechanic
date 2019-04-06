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
  public Left: ASTPos; //     Left: I_Pos;
  public Right: ASTPos; //     Right: I_Pos;
  public Unsigned: boolean; //     Unsigned: boolean;
  public X: ASTNodeArithmExpr; //     X: IArithmExpr;

  constructor(arithmcmd: IArithmCmd) {
    super(arithmcmd);
    logg("ASTNodeArithmCmd");
    const { Left, Right, Unsigned, X, ...rest_arithmcmd } = arithmcmd;
    this.Left = ASTSimpleSingle(ASTPos, Left)!;
    this.Right = ASTSimpleSingle(ASTPos, Right)!;
    this.Unsigned = Unsigned;
    this.X = ASTSingle(ASTNodeArithmExpr, X)!;
    this.rest = rest_arithmcmd;
  }
}
