/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTMoreComment } from "./ASTMoreComment";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { logg } from "./logg";
import { IComment } from "./ParserTypes";

export class ASTNodeComment extends ASTNode {
  public kind: ASTnodeKind.ASTNodeComment = ASTnodeKind.ASTNodeComment;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeComment];
  public more: ASTMoreComment = new ASTMoreComment();
  public Hash: ASTPos; //     Hash: I_Pos;
  public Text: string; //     Text: string;

  constructor(comment: IComment, public parent: ASTNode | null, public parentField: string) {
    super(comment, parent, parentField);
    logg("ASTNodeComment");
    this.Hash = ASTSimpleSingle(ASTPos, comment.Hash)!;
    this.Text = comment.Text;
    ["kind", "parent", "parentField", "Hash"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitASTNodeCommentPre(this);

    visitor.visitASTNodeCommentPost(this);
  }
}
