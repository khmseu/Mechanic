/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { joiner } from "./joiner";

export class ASTVisitorComments extends ASTVisitorBase {
  public visitASTNodeCommentPre(node: ASTNodeComment) {
    // logg({ Text: node.Text });
    if (!node.parent!.more[node.parentField]) {
      node.parent!.more[node.parentField] = [];
    }
    node.parent!.more[node.parentField].push(node.Text);
    node.parent!.more.commentField[node.parentField]++;
  }
  public visitAllPost(node: ASTNode) {
    // logg({ Text: node.Text });
    Object.keys(node.more.commentField).forEach((field) => {
      node.more[field] = "// " + joiner(node.more[field], "\n// ");
    });
  }
}
