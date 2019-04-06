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
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { ICmdSubst } from "./ParserTypes";

export class ASTNodeCmdSubst extends ASTNode {
  public kind: ASTnodeKind.ASTNodeCmdSubst = ASTnodeKind.ASTNodeCmdSubst;
  public Left: ASTPos; //     Left: I_Pos;
  public Right: ASTPos; //     Right: I_Pos;
  public StmtList: ASTNodeStmtList | null; //     StmtList: IStmtList | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];
  public TempFile: boolean; //     TempFile: boolean;
  public ReplyVar: boolean; //     ReplyVar: boolean;

  constructor(cmdsubst: ICmdSubst) {
    super(cmdsubst);
    logg("ASTNodeCmdSubst");
    const { Left, Right, StmtList, Last, TempFile, ReplyVar, ...rest_cmdsubst } = cmdsubst;
    this.Left = ASTSimpleSingle(ASTPos, Left)!;
    this.Right = ASTSimpleSingle(ASTPos, Right)!;
    this.StmtList = ASTSingle(ASTNodeStmtList, StmtList);
    this.Last = ASTArray(ASTNodeComment, Last)!;
    this.TempFile = TempFile;
    this.ReplyVar = ReplyVar;
    this.rest = rest_cmdsubst;
  }
}
