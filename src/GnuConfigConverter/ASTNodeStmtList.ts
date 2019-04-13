/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTMoreStmtList } from "./ASTMoreStmtList";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { logg } from "./logg";
import { IStmtList } from "./ParserTypes";

export class ASTNodeStmtList extends ASTNode {
  public kind: ASTnodeKind.ASTNodeStmtList = ASTnodeKind.ASTNodeStmtList;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeStmtList];
  public more: ASTMoreStmtList = new ASTMoreStmtList();
  public Stmts: ASTNodeStmt[]; //     Stmts: IStmt[];
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(stmtlist: IStmtList) {
    super(stmtlist);
    logg("ASTNodeStmtList");
    this.Stmts = ASTArray(ASTNodeStmt, stmtlist.Stmts)!;
    this.Last = ASTArray(ASTNodeComment, stmtlist.Last)!;
    [].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeStmtListPre(this);
    this.Stmts.forEach((e) => e.accept(visitor));
    this.Last.forEach((e) => e.accept(visitor));
    visitor.visitASTNodeStmtListPost(this);
  }
}
