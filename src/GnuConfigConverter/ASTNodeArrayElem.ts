/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTMoreArrayElem } from "./ASTMoreArrayElem";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IArrayElem } from "./ParserTypes";

export class ASTNodeArrayElem extends ASTNode {
  public kind: ASTnodeKind.ASTNodeArrayElem = ASTnodeKind.ASTNodeArrayElem;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeArrayElem];
  public more: ASTMoreArrayElem = new ASTMoreArrayElem();
  public Index: ASTNodeArithmExpr; //     Index: IArithmExpr;
  public Value: ASTNodeWord | null; //     Value: IWord | null;
  public Comments: ASTNodeComment[]; //     Comments: IComment[];

  constructor(arrayelem: IArrayElem) {
    super(arrayelem);
    logg("ASTNodeArrayElem");
    this.Index = ASTSingle(ASTNodeArithmExpr, arrayelem.Index)!;
    this.Value = ASTSingle(ASTNodeWord, arrayelem.Value);
    this.Comments = ASTArray(ASTNodeComment, arrayelem.Comments)!;
    [].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeArrayElemPre(this);
    this.Index.accept(visitor);
    if (this.Value) {
      this.Value.accept(visitor);
    }
    this.Comments.forEach((e) => e.accept(visitor));
    visitor.visitASTNodeArrayElemPost(this);
  }
}
