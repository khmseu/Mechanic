/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IArrayElem } from "../ParserTypes";
import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTSingle } from "./ASTSingle";
import { ASTSingleNotNull } from "./ASTSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeArrayElem extends ASTNode {
  public kind: ASTnodeKind.ASTNodeArrayElem = ASTnodeKind.ASTNodeArrayElem;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeArrayElem];
  public Index: ASTNodeArithmExpr; //     Index: IArithmExpr;
  public Value: ASTNodeWord | null; //     Value: IWord | null;
  public Comments: ASTNodeComment[]; //     Comments: IComment[];

  constructor(arrayelem: IArrayElem, public parent: ASTNode | null, public parentField: string) {
    super(arrayelem, parent, parentField);
    logg("ASTNodeArrayElem");
    this.Index = ASTSingleNotNull(ASTNodeArithmExpr, arrayelem.Index, this, "Index");
    this.Value = ASTSingle(ASTNodeWord, arrayelem.Value, this, "Value");
    this.Comments = ASTArray(ASTNodeComment, arrayelem.Comments, this, "Comments");
    ["kind", "parent", "parentField"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeArrayElemPre(this);
    visitor.visitAllPreAfter(this);
    this.Comments.accept(visitor);
    if (this.Comments) {
      this.Comments.accept(visitor);
    }
    this.Comments.forEach((e) => e.accept(visitor));
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeArrayElemPost(this);
    visitor.visitAllPostAfter(this);
  }
}
