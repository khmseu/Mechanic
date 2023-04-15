/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./generated/ASTNode";
import { ASTVisitorBase } from "./generated/ASTVisitorBase";

export class ASTVisitorPrint extends ASTVisitorBase {
  constructor(private cb: (stuff: any) => void) {
    super();
  }
  public visitAllPostAfter(node: ASTNode): void {
    const missing: { [k: string]: any } = {};
    if (!node.more.printDone) {
      missing.printer = node.kindString;
    }
    if (Object.keys(node.more.commentField).length) {
      missing.comments = Object.keys(node.more.commentField);
    }
    if (Object.keys(missing).length) {
      this.cbc({ missing });
      this.cbc(node);
    }
  }

  public visitASTNodeCommentPost(node: ASTNode) {
    node.more.printDone = true;
  }
  public visitASTNodeStmtPost(node: ASTNode) {
    this.combine(node, "...");
  }
  public visitASTNodeCaseItemPost(node: ASTNode) {
    this.combine(node, "...");
  }
  public visitASTNodeIfClausePost(node: ASTNode) {
    this.combine(node, "...");
  }
  public visitASTNodeStmtListPost(node: ASTNode) {
    this.combine(node, "...");
  }

  private pull(node: ASTNode, cf: string) {
    const ret = node.more[cf];
    delete node.more.commentField[cf];
    return ret;
  }
  private cbc(data: any) {
    if (data) {
      this.cb(data);
    }
  }
  private combine(node: ASTNode, data: any) {
    this.cbc(this.pull(node, "Comments"));
    this.cbc(data);
    this.cbc(this.pull(node, "Last"));
  }
}
