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
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeCmdSubst];
  public Left: ASTPos; //     Left: I_Pos;
  public Right: ASTPos; //     Right: I_Pos;
  public StmtList: ASTNodeStmtList | null; //     StmtList: IStmtList | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];
  public TempFile: boolean; //     TempFile: boolean;
  public ReplyVar: boolean; //     ReplyVar: boolean;

  constructor(cmdsubst: ICmdSubst) {
    super(cmdsubst);
    logg("ASTNodeCmdSubst");
    this.Left = ASTSimpleSingle(ASTPos, cmdsubst.Left)!;
    this.Right = ASTSimpleSingle(ASTPos, cmdsubst.Right)!;
    this.StmtList = ASTSingle(ASTNodeStmtList, cmdsubst.StmtList);
    this.Last = ASTArray(ASTNodeComment, cmdsubst.Last)!;
    this.TempFile = cmdsubst.TempFile;
    this.ReplyVar = cmdsubst.ReplyVar;
  }
}
