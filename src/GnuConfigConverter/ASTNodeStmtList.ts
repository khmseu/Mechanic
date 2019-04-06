/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { logg } from "./logg";
import { IStmtList } from "./ParserTypes";

export class ASTNodeStmtList extends ASTNode {
  public kind: ASTnodeKind.ASTNodeStmtList = ASTnodeKind.ASTNodeStmtList;
  public Stmts: ASTNodeStmt[]; //     Stmts: IStmt[];
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(stmtlist: IStmtList) {
    super(stmtlist);
    logg("ASTNodeStmtList");
    const { Stmts, Last, ...rest_stmtlist } = stmtlist;
    this.Stmts = ASTArray(ASTNodeStmt, Stmts)!;
    this.Last = ASTArray(ASTNodeComment, Last)!;
    this.rest = rest_stmtlist;
  }
}
