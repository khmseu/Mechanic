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
import { op, Token } from "./Token";

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

  constructor(caseitem: ICaseItem) {
    super(caseitem);
    logg("ASTNodeCaseItem");
    this.Op = CaseOperator[caseitem.Op];
    this.OpString = op((caseitem.Op as unknown) as Token);
    this.OpPos = ASTSimpleSingle(ASTPos, caseitem.OpPos)!;
    this.Comments = ASTArray(ASTNodeComment, caseitem.Comments)!;
    this.Patterns = ASTArray(ASTNodeWord, caseitem.Patterns);
    this.StmtList = ASTSingle(ASTNodeStmtList, caseitem.StmtList);
    this.Last = ASTArray(ASTNodeComment, caseitem.Last)!;
  }
}
