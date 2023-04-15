/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { CaseOperator, ICaseItem } from "../ParserTypes";
import { op, Token } from "../Token";
import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeCaseItem extends ASTNode {
  public kind: ASTnodeKind.ASTNodeCaseItem = ASTnodeKind.ASTNodeCaseItem;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeCaseItem];
  public Op: string; //     Op: CaseOperator;
  public OpString: string;
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Comments: ASTNodeComment[]; //     Comments: IComment[];
  public Patterns: ASTNodeWord[]; //     Patterns: IWord[] | null;
  public StmtList: ASTNodeStmtList | null; //     StmtList: IStmtList | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(caseitem: ICaseItem, public parent: ASTNode | null, public parentField: string) {
    super(caseitem, parent, parentField);
    logg("ASTNodeCaseItem");
    this.Op = CaseOperator[caseitem.Op];
    this.OpString = op((caseitem.Op as unknown) as Token);
    this.OpPos = ASTSimpleSingleNotNull(ASTPos, caseitem.OpPos);
    this.Comments = ASTArray(ASTNodeComment, caseitem.Comments, this, "Comments");
    this.Patterns = ASTArray(ASTNodeWord, caseitem.Patterns, this, "Patterns");
    this.StmtList = ASTSingle(ASTNodeStmtList, caseitem.StmtList, this, "StmtList");
    this.Last = ASTArray(ASTNodeComment, caseitem.Last, this, "Last");
    ["kind", "parent", "parentField", "OpPos"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeCaseItemPre(this);
    visitor.visitAllPreAfter(this);
    this.Comments.forEach((e) => e.accept(visitor));
    this.Patterns.forEach((e) => e.accept(visitor));
    if (this.StmtList) {
      this.StmtList.accept(visitor);
    }
    this.Last.forEach((e) => e.accept(visitor));
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeCaseItemPost(this);
    visitor.visitAllPostAfter(this);
  }
}
