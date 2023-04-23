/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IWordIter } from "../ParserTypes";
import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeWordIter extends ASTNode {
  public kind: ASTnodeKind.ASTNodeWordIter = ASTnodeKind.ASTNodeWordIter;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeWordIter];
  public Name: ASTNodeLit | null; //     Name: ILit | null;
  public InPos: ASTPos; //     InPos: I_Pos;
  public Items: ASTNodeWord[]; //     Items: IWord[] | null;

  constructor(worditer: IWordIter, public parent: ASTNode | null, public parentField: string) {
    super(worditer, parent, parentField);
    logg("ASTNodeWordIter");
    this.Name = ASTSingle(ASTNodeLit, worditer.Name, this, "Name");
    this.InPos = ASTSimpleSingleNotNull(ASTPos, worditer.InPos);
    this.Items = ASTArray(ASTNodeWord, worditer.Items, this, "Items");
    ["kind", "parent", "parentField", "InPos"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeWordIterPre(this);
    visitor.visitAllPreAfter(this);
    if (this.Items) {
      this.Items.accept(visitor);
    }
    this.Items.forEach((e) => e.accept(visitor));
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeWordIterPost(this);
    visitor.visitAllPostAfter(this);
  }
}
