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
import { ASTNodeLoop } from "./ASTNodeLoop";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IForClause } from "./ParserTypes";

export class ASTNodeForClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeForClause = ASTnodeKind.ASTNodeForClause;
  public ForPos: ASTPos; //     ForPos: I_Pos;
  public DoPos: ASTPos; //     DoPos: I_Pos;
  public DonePos: ASTPos; //     DonePos: I_Pos;
  public Select: boolean; //     Select: boolean;
  public Loop: ASTNodeLoop; //     Loop: ILoop;
  public Do: ASTNodeStmtList | null; //     Do: IStmtList | null;
  public DoLast: ASTNodeComment[]; //     DoLast: IComment[];

  constructor(forclause: IForClause) {
    super(forclause);
    logg("ASTNodeForClause");
    const { ForPos, DoPos, DonePos, Select, Loop, Do, DoLast, ...rest_forclause } = forclause;
    this.ForPos = ASTSimpleSingle(ASTPos, ForPos)!;
    this.DoPos = ASTSimpleSingle(ASTPos, DoPos)!;
    this.DonePos = ASTSimpleSingle(ASTPos, DonePos)!;
    this.Select = Select;
    this.Loop = ASTSingle(ASTNodeLoop, Loop)!;
    this.Do = ASTSingle(ASTNodeStmtList, Do);
    this.DoLast = ASTArray(ASTNodeComment, DoLast)!;
    this.rest = rest_forclause;
  }
}
