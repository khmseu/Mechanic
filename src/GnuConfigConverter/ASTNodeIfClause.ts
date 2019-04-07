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
import { IIfClause } from "./ParserTypes";

export class ASTNodeIfClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeIfClause = ASTnodeKind.ASTNodeIfClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeIfClause];
  public Position: ASTPos; //     Position: I_Pos;
  public ThenPos: ASTPos; //     ThenPos: I_Pos;
  public FiPos: ASTPos; //     FiPos: I_Pos;
  public Cond: ASTNodeStmtList | null; //     Cond: IStmtList | null;
  public CondLast: ASTNodeComment[]; //     CondLast: IComment[];
  public Then: ASTNodeStmtList | null; //     Then: IStmtList | null;
  public ThenLast: ASTNodeComment[]; //     ThenLast: IComment[];
  public Else: ASTNodeIfClause | null; //     Else: IIfClause | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(ifclause: IIfClause) {
    super(ifclause);
    logg("ASTNodeIfClause");
    this.Position = ASTSimpleSingle(ASTPos, ifclause.Position)!;
    this.ThenPos = ASTSimpleSingle(ASTPos, ifclause.ThenPos)!;
    this.FiPos = ASTSimpleSingle(ASTPos, ifclause.FiPos)!;
    this.Cond = ASTSingle(ASTNodeStmtList, ifclause.Cond);
    this.CondLast = ASTArray(ASTNodeComment, ifclause.CondLast)!;
    this.Then = ASTSingle(ASTNodeStmtList, ifclause.Then);
    this.ThenLast = ASTArray(ASTNodeComment, ifclause.ThenLast)!;
    this.Else = ASTSingle(ASTNodeIfClause, ifclause.Else);
    this.Last = ASTArray(ASTNodeComment, ifclause.Last)!;
  }
}
