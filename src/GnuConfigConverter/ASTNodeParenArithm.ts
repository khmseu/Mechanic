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
import { IParenArithm } from "./ParserTypes";

export class ASTNodeParenArithm extends ASTNode {
  public kind: ASTnodeKind.ASTNodeParenArithm = ASTnodeKind.ASTNodeParenArithm;
  public Lparen: ASTPos; //     Lparen: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public X: ASTNodeArithmExpr; //     X: IArithmExpr;

  constructor(parenarithm: IParenArithm) {
    super(parenarithm);
    logg("ASTNodeParenArithm");
    const { Lparen, Rparen, X, ...rest_parenarithm } = parenarithm;
    this.Lparen = ASTSimpleSingle(ASTPos, Lparen)!;
    this.Rparen = ASTSimpleSingle(ASTPos, Rparen)!;
    this.X = ASTSingle(ASTNodeArithmExpr, X)!;
    this.rest = rest_parenarithm;
  }
}
