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
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { CaseOperator, ICaseItem } from "./ParserTypes";

export class ASTNodeCaseItem extends ASTNode {
  public kind: ASTnodeKind.ASTNodeCaseItem = ASTnodeKind.ASTNodeCaseItem;
  public Op: CaseOperator; //     Op: CaseOperator;
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Comments: ASTNodeComment[]; //     Comments: IComment[];
  public Patterns: ASTNodeWord[]; //     Patterns: IWord[] | null;
  public StmtList: ASTNodeStmtList | null; //     StmtList: IStmtList | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(caseitem: ICaseItem) {
    super(caseitem);
    logg("ASTNodeCaseItem");
    const { Op, OpPos, Comments, Patterns, StmtList, Last, ...rest_caseitem } = caseitem;
    this.Op = Op;
    this.OpPos = ASTSimpleSingle(ASTPos, OpPos)!;
    this.Comments = ASTArray(ASTNodeComment, Comments)!;
    this.Patterns = ASTArray(ASTNodeWord, Patterns);
    this.StmtList = ASTSingle(ASTNodeStmtList, StmtList);
    this.Last = ASTArray(ASTNodeComment, Last)!;
    this.rest = rest_caseitem;
  }
}
