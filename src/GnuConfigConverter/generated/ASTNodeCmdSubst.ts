/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { ICmdSubst } from "../ParserTypes";
import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeCmdSubst extends ASTNode {
  public kind: ASTnodeKind.ASTNodeCmdSubst = ASTnodeKind.ASTNodeCmdSubst;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeCmdSubst];
  public Left: ASTPos; //     Left: I_Pos;
  public Right: ASTPos; //     Right: I_Pos;
  public StmtList: ASTNodeStmtList | null; //     StmtList: IStmtList | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];
  public TempFile: boolean; //     TempFile: boolean;
  public ReplyVar: boolean; //     ReplyVar: boolean;

  constructor(cmdsubst: ICmdSubst, public parent: ASTNode | null, public parentField: string) {
    super(cmdsubst, parent, parentField);
    logg("ASTNodeCmdSubst");
    this.Left = ASTSimpleSingleNotNull(ASTPos, cmdsubst.Left);
    this.Right = ASTSimpleSingleNotNull(ASTPos, cmdsubst.Right);
    this.StmtList = ASTSingle(ASTNodeStmtList, cmdsubst.StmtList, this, "StmtList");
    this.Last = ASTArray(ASTNodeComment, cmdsubst.Last, this, "Last");
    this.TempFile = cmdsubst.TempFile;
    this.ReplyVar = cmdsubst.ReplyVar;
    ["kind", "parent", "parentField", "Left", "Right"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeCmdSubstPre(this);
    visitor.visitAllPreAfter(this);
    if (this.ReplyVar) {
      this.ReplyVar.accept(visitor);
    }
    this.ReplyVar.forEach((e) => e.accept(visitor));
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeCmdSubstPost(this);
    visitor.visitAllPostAfter(this);
  }
}
