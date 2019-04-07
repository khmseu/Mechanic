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
import { IArithmExp } from "./ParserTypes";

export class ASTNodeArithmExp extends ASTNode {
  public kind: ASTnodeKind.ASTNodeArithmExp = ASTnodeKind.ASTNodeArithmExp;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeArithmExp];
  public Left: ASTPos; //     Left: I_Pos;
  public Right: ASTPos; //     Right: I_Pos;
  public Bracket: boolean; //     Bracket: boolean;
  public Unsigned: boolean; //     Unsigned: boolean;
  public X: ASTNodeArithmExpr; //     X: IArithmExpr;

  constructor(arithmexp: IArithmExp) {
    super(arithmexp);
    logg("ASTNodeArithmExp");
    this.Left = ASTSimpleSingle(ASTPos, arithmexp.Left)!;
    this.Right = ASTSimpleSingle(ASTPos, arithmexp.Right)!;
    this.Bracket = arithmexp.Bracket;
    this.Unsigned = arithmexp.Unsigned;
    this.X = ASTSingle(ASTNodeArithmExpr, arithmexp.X)!;
  }
}
