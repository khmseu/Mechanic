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
import { IParenTest } from "./ParserTypes";

export class ASTNodeParenTest extends ASTNode {
  public kind: ASTnodeKind.ASTNodeParenTest = ASTnodeKind.ASTNodeParenTest;
  public Lparen: ASTPos; //     Lparen: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public X: ASTNodeTestExpr; //     X: ITestExpr;

  constructor(parentest: IParenTest) {
    super(parentest);
    logg("ASTNodeParenTest");
    const { Lparen, Rparen, X, ...rest_parentest } = parentest;
    this.Lparen = ASTSimpleSingle(ASTPos, Lparen)!;
    this.Rparen = ASTSimpleSingle(ASTPos, Rparen)!;
    this.X = ASTSingle(ASTNodeTestExpr, X)!;
    this.rest = rest_parentest;
  }
}
