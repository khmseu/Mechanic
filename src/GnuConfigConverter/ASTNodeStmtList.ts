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
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeStmtList];
  public Stmts: ASTNodeStmt[]; //     Stmts: IStmt[];
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(stmtlist: IStmtList) {
    super(stmtlist);
    logg("ASTNodeStmtList");
    this.Stmts = ASTArray(ASTNodeStmt, stmtlist.Stmts)!;
    this.Last = ASTArray(ASTNodeComment, stmtlist.Last)!;
  }
}
