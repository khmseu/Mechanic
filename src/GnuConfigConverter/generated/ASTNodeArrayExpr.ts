/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IArrayExpr } from "../ParserTypes";
import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeArrayElem } from "./ASTNodeArrayElem";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeArrayExpr extends ASTNode {
  public kind: ASTnodeKind.ASTNodeArrayExpr = ASTnodeKind.ASTNodeArrayExpr;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeArrayExpr];
  public Lparen: ASTPos; //     Lparen: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public Elems: ASTNodeArrayElem[]; //     Elems: IArrayElem[] | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(arrayexpr: IArrayExpr, public parent: ASTNode | null, public parentField: string) {
    super(arrayexpr, parent, parentField);
    logg("ASTNodeArrayExpr");
    this.Lparen = ASTSimpleSingleNotNull(ASTPos, arrayexpr.Lparen);
    this.Rparen = ASTSimpleSingleNotNull(ASTPos, arrayexpr.Rparen);
    this.Elems = ASTArray(ASTNodeArrayElem, arrayexpr.Elems, this, "Elems");
    this.Last = ASTArray(ASTNodeComment, arrayexpr.Last, this, "Last");
    ["kind", "parent", "parentField", "Lparen", "Rparen"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeArrayExprPre(this);
    visitor.visitAllPreAfter(this);
    this.Last.forEach((e) => e.accept(visitor));
    this.Last.forEach((e) => e.accept(visitor));
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeArrayExprPost(this);
    visitor.visitAllPostAfter(this);
  }
}
