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
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeCStyleLoop];
  public Lparen: ASTPos; //     Lparen: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public Init: ASTNodeArithmExpr; //     Init: IArithmExpr;
  public Cond: ASTNodeArithmExpr; //     Cond: IArithmExpr;
  public Post: ASTNodeArithmExpr; //     Post: IArithmExpr;

  constructor(cstyleloop: ICStyleLoop) {
    super(cstyleloop);
    logg("ASTNodeCStyleLoop");
    this.Lparen = ASTSimpleSingle(ASTPos, cstyleloop.Lparen)!;
    this.Rparen = ASTSimpleSingle(ASTPos, cstyleloop.Rparen)!;
    this.Init = ASTSingle(ASTNodeArithmExpr, cstyleloop.Init)!;
    this.Cond = ASTSingle(ASTNodeArithmExpr, cstyleloop.Cond)!;
    this.Post = ASTSingle(ASTNodeArithmExpr, cstyleloop.Post)!;
  }
}
