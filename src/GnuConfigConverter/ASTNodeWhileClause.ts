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
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeWhileClause];
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
    this.WhilePos = ASTSimpleSingle(ASTPos, whileclause.WhilePos)!;
    this.DoPos = ASTSimpleSingle(ASTPos, whileclause.DoPos)!;
    this.DonePos = ASTSimpleSingle(ASTPos, whileclause.DonePos)!;
    this.Until = whileclause.Until;
    this.Cond = ASTSingle(ASTNodeStmtList, whileclause.Cond);
    this.CondLast = ASTArray(ASTNodeComment, whileclause.CondLast)!;
    this.Do = ASTSingle(ASTNodeStmtList, whileclause.Do);
    this.DoLast = ASTArray(ASTNodeComment, whileclause.DoLast)!;
  }
}
