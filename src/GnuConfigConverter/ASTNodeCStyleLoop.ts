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
import { ICStyleLoop } from "./ParserTypes";

export class ASTNodeCStyleLoop extends ASTNode {
  public kind: ASTnodeKind.ASTNodeCStyleLoop = ASTnodeKind.ASTNodeCStyleLoop;
  public Lparen: ASTPos; //     Lparen: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public Init: ASTNodeArithmExpr; //     Init: IArithmExpr;
  public Cond: ASTNodeArithmExpr; //     Cond: IArithmExpr;
  public Post: ASTNodeArithmExpr; //     Post: IArithmExpr;

  constructor(cstyleloop: ICStyleLoop) {
    super(cstyleloop);
    logg("ASTNodeCStyleLoop");
    const { Lparen, Rparen, Init, Cond, Post, ...rest_cstyleloop } = cstyleloop;
    this.Lparen = ASTSimpleSingle(ASTPos, Lparen)!;
    this.Rparen = ASTSimpleSingle(ASTPos, Rparen)!;
    this.Init = ASTSingle(ASTNodeArithmExpr, Init)!;
    this.Cond = ASTSingle(ASTNodeArithmExpr, Cond)!;
    this.Post = ASTSingle(ASTNodeArithmExpr, Post)!;
    this.rest = rest_cstyleloop;
  }
}
