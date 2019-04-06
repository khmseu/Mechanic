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
  public Left: ASTPos; //     Left: I_Pos;
  public Right: ASTPos; //     Right: I_Pos;
  public Bracket: boolean; //     Bracket: boolean;
  public Unsigned: boolean; //     Unsigned: boolean;
  public X: ASTNodeArithmExpr; //     X: IArithmExpr;

  constructor(arithmexp: IArithmExp) {
    super(arithmexp);
    logg("ASTNodeArithmExp");
    const { Left, Right, Bracket, Unsigned, X, ...rest_arithmexp } = arithmexp;
    this.Left = ASTSimpleSingle(ASTPos, Left)!;
    this.Right = ASTSimpleSingle(ASTPos, Right)!;
    this.Bracket = Bracket;
    this.Unsigned = Unsigned;
    this.X = ASTSingle(ASTNodeArithmExpr, X)!;
    this.rest = rest_arithmexp;
  }
}
