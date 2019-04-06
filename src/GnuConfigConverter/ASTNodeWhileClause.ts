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
import { IWhileClause } from "./ParserTypes";

export class ASTNodeWhileClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeWhileClause = ASTnodeKind.ASTNodeWhileClause;
  public WhilePos: ASTPos; //     WhilePos: I_Pos;
  public DoPos: ASTPos; //     DoPos: I_Pos;
  public DonePos: ASTPos; //     DonePos: I_Pos;
  public Until: boolean; //     Until: boolean;
  public Cond: ASTNodeStmtList | null; //     Cond: IStmtList | null;
  public CondLast: ASTNodeComment[]; //     CondLast: IComment[];
  public Do: ASTNodeStmtList | null; //     Do: IStmtList | null;
  public DoLast: ASTNodeComment[]; //     DoLast: IComment[];

  constructor(whileclause: IWhileClause) {
    super(whileclause);
    logg("ASTNodeWhileClause");
    const { WhilePos, DoPos, DonePos, Until, Cond, CondLast, Do, DoLast, ...rest_whileclause } = whileclause;
    this.WhilePos = ASTSimpleSingle(ASTPos, WhilePos)!;
    this.DoPos = ASTSimpleSingle(ASTPos, DoPos)!;
    this.DonePos = ASTSimpleSingle(ASTPos, DonePos)!;
    this.Until = Until;
    this.Cond = ASTSingle(ASTNodeStmtList, Cond);
    this.CondLast = ASTArray(ASTNodeComment, CondLast)!;
    this.Do = ASTSingle(ASTNodeStmtList, Do);
    this.DoLast = ASTArray(ASTNodeComment, DoLast)!;
    this.rest = rest_whileclause;
  }
}
