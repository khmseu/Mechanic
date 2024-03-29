/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IAssign } from "../ParserTypes";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTNodeArrayExpr } from "./ASTNodeArrayExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeAssign extends ASTNode {
  public kind: ASTnodeKind.ASTNodeAssign = ASTnodeKind.ASTNodeAssign;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeAssign];
  public Append: boolean; //     Append: boolean;
  public Naked: boolean; //     Naked: boolean;
  public Name: ASTNodeLit | null; //     Name: ILit | null;
  public Index: ASTNodeArithmExpr | null; //     Index: IArithmExpr | null;
  public Value: ASTNodeWord | null; //     Value: IWord | null;
  public Array: ASTNodeArrayExpr | null; //     Array: IArrayExpr | null;

  constructor(assign: IAssign, public parent: ASTNode | null, public parentField: string) {
    super(assign, parent, parentField);
    logg("ASTNodeAssign");
    this.Append = assign.Append;
    this.Naked = assign.Naked;
    this.Name = ASTSingle(ASTNodeLit, assign.Name, this, "Name");
    this.Index = ASTSingle(ASTNodeArithmExpr, assign.Index, this, "Index");
    this.Value = ASTSingle(ASTNodeWord, assign.Value, this, "Value");
    this.Array = ASTSingle(ASTNodeArrayExpr, assign.Array, this, "Array");
    ["kind", "parent", "parentField"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeAssignPre(this);
    visitor.visitAllPreAfter(this);
    if (this.Array) {
      this.Array.accept(visitor);
    }
    if (this.Array) {
      this.Array.accept(visitor);
    }
    if (this.Array) {
      this.Array.accept(visitor);
    }
    if (this.Array) {
      this.Array.accept(visitor);
    }
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeAssignPost(this);
    visitor.visitAllPostAfter(this);
  }
}
