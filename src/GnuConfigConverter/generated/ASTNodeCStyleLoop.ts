/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { ICStyleLoop } from "../ParserTypes";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingleNotNull } from "./ASTSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeCStyleLoop extends ASTNode {
  public kind: ASTnodeKind.ASTNodeCStyleLoop = ASTnodeKind.ASTNodeCStyleLoop;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeCStyleLoop];
  public Lparen: ASTPos; //     Lparen: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public Init: ASTNodeArithmExpr; //     Init: IArithmExpr;
  public Cond: ASTNodeArithmExpr; //     Cond: IArithmExpr;
  public Post: ASTNodeArithmExpr; //     Post: IArithmExpr;

  constructor(cstyleloop: ICStyleLoop, public parent: ASTNode | null, public parentField: string) {
    super(cstyleloop, parent, parentField);
    logg("ASTNodeCStyleLoop");
    this.Lparen = ASTSimpleSingleNotNull(ASTPos, cstyleloop.Lparen);
    this.Rparen = ASTSimpleSingleNotNull(ASTPos, cstyleloop.Rparen);
    this.Init = ASTSingleNotNull(ASTNodeArithmExpr, cstyleloop.Init, this, "Init");
    this.Cond = ASTSingleNotNull(ASTNodeArithmExpr, cstyleloop.Cond, this, "Cond");
    this.Post = ASTSingleNotNull(ASTNodeArithmExpr, cstyleloop.Post, this, "Post");
    ["kind", "parent", "parentField", "Lparen", "Rparen"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeCStyleLoopPre(this);
    visitor.visitAllPreAfter(this);
    this.Init.accept(visitor);
    this.Cond.accept(visitor);
    this.Post.accept(visitor);
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeCStyleLoopPost(this);
    visitor.visitAllPostAfter(this);
  }
}
