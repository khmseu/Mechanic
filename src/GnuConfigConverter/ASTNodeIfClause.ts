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
    const { Position, ThenPos, FiPos, Cond, CondLast, Then, ThenLast, Else, Last, ...rest_ifclause } = ifclause;
    this.Position = ASTSimpleSingle(ASTPos, Position)!;
    this.ThenPos = ASTSimpleSingle(ASTPos, ThenPos)!;
    this.FiPos = ASTSimpleSingle(ASTPos, FiPos)!;
    this.Cond = ASTSingle(ASTNodeStmtList, Cond);
    this.CondLast = ASTArray(ASTNodeComment, CondLast)!;
    this.Then = ASTSingle(ASTNodeStmtList, Then);
    this.ThenLast = ASTArray(ASTNodeComment, ThenLast)!;
    this.Else = ASTSingle(ASTNodeIfClause, Else);
    this.Last = ASTArray(ASTNodeComment, Last)!;
    this.rest = rest_ifclause;
  }
}
