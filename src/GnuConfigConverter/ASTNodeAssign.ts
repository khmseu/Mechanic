/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTMoreAssign } from "./ASTMoreAssign";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTNodeArrayExpr } from "./ASTNodeArrayExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IAssign } from "./ParserTypes";

export class ASTNodeAssign extends ASTNode {
  public kind: ASTnodeKind.ASTNodeAssign = ASTnodeKind.ASTNodeAssign;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeAssign];
  public more: ASTMoreAssign = new ASTMoreAssign();
  public Append: boolean; //     Append: boolean;
  public Naked: boolean; //     Naked: boolean;
  public Name: ASTNodeLit | null; //     Name: ILit | null;
  public Index: ASTNodeArithmExpr; //     Index: IArithmExpr;
  public Value: ASTNodeWord | null; //     Value: IWord | null;
  public Array: ASTNodeArrayExpr | null; //     Array: IArrayExpr | null;

  constructor(assign: IAssign) {
    super(assign);
    logg("ASTNodeAssign");
    this.Append = assign.Append;
    this.Naked = assign.Naked;
    this.Name = ASTSingle(ASTNodeLit, assign.Name);
    this.Index = ASTSingle(ASTNodeArithmExpr, assign.Index)!;
    this.Value = ASTSingle(ASTNodeWord, assign.Value);
    this.Array = ASTSingle(ASTNodeArrayExpr, assign.Array);
    [].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeAssignPre(this);
    if (this.Name) {
      this.Name.accept(visitor);
    }
    this.Index.accept(visitor);
    if (this.Value) {
      this.Value.accept(visitor);
    }
    if (this.Array) {
      this.Array.accept(visitor);
    }
    visitor.visitASTNodeAssignPost(this);
  }
}
