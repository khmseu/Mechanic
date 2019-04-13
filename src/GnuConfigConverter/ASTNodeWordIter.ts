/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTMoreWordIter } from "./ASTMoreWordIter";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IWordIter } from "./ParserTypes";

export class ASTNodeWordIter extends ASTNode {
  public kind: ASTnodeKind.ASTNodeWordIter = ASTnodeKind.ASTNodeWordIter;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeWordIter];
  public more: ASTMoreWordIter = new ASTMoreWordIter();
  public Name: ASTNodeLit | null; //     Name: ILit | null;
  public InPos: ASTPos; //     InPos: I_Pos;
  public Items: ASTNodeWord[]; //     Items: IWord[] | null;

  constructor(worditer: IWordIter, public parent: ASTNode | null) {
    super(worditer, parent);
    logg("ASTNodeWordIter");
    this.Name = ASTSingle(ASTNodeLit, worditer.Name, this);
    this.InPos = ASTSimpleSingle(ASTPos, worditer.InPos)!;
    this.Items = ASTArray(ASTNodeWord, worditer.Items, this);
    ["InPos"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeWordIterPre(this);
    if (this.Name) {
      this.Name.accept(visitor);
    }
    this.Items.forEach((e) => e.accept(visitor));
    visitor.visitASTNodeWordIterPost(this);
  }
}
