/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTMoreCaseItem } from "./ASTMoreCaseItem";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { CaseOperator, ICaseItem } from "./ParserTypes";
import { op, Token } from "./Token";

export class ASTNodeCaseItem extends ASTNode {
  public kind: ASTnodeKind.ASTNodeCaseItem = ASTnodeKind.ASTNodeCaseItem;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeCaseItem];
  public more: ASTMoreCaseItem = new ASTMoreCaseItem();
  public Op: string; //     Op: CaseOperator;
  public OpString: string;
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Comments: ASTNodeComment[]; //     Comments: IComment[];
  public Patterns: ASTNodeWord[]; //     Patterns: IWord[] | null;
  public StmtList: ASTNodeStmtList | null; //     StmtList: IStmtList | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(caseitem: ICaseItem, public parent: ASTNode | null) {
    super(caseitem, parent);
    logg("ASTNodeCaseItem");
    this.Op = CaseOperator[caseitem.Op];
    this.OpString = op((caseitem.Op as unknown) as Token);
    this.OpPos = ASTSimpleSingle(ASTPos, caseitem.OpPos)!;
    this.Comments = ASTArray(ASTNodeComment, caseitem.Comments, this)!;
    this.Patterns = ASTArray(ASTNodeWord, caseitem.Patterns, this);
    this.StmtList = ASTSingle(ASTNodeStmtList, caseitem.StmtList, this);
    this.Last = ASTArray(ASTNodeComment, caseitem.Last, this)!;
    ["OpPos"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeCaseItemPre(this);
    this.Comments.forEach((e) => e.accept(visitor));
    this.Patterns.forEach((e) => e.accept(visitor));
    if (this.StmtList) {
      this.StmtList.accept(visitor);
    }
    this.Last.forEach((e) => e.accept(visitor));
    visitor.visitASTNodeCaseItemPost(this);
  }
}
