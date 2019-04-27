/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNodeComment } from "./ASTNodeComment";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTVisitorComments extends ASTVisitorBase {
  public visitASTNodeCommentPre(node: ASTNodeComment) {
    if (!node.parent!.more[node.parentField]) {
      node.parent!.more[node.parentField] = [];
    }
    node.parent!.more[node.parentField].push(node.Text);
  }
}
