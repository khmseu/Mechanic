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
import { ISubshell } from "./ParserTypes";

export class ASTNodeSubshell extends ASTNode {
  public kind: ASTnodeKind.ASTNodeSubshell = ASTnodeKind.ASTNodeSubshell;
  public Lparen: ASTPos; //     Lparen: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public StmtList: ASTNodeStmtList | null; //     StmtList: IStmtList | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(subshell: ISubshell) {
    super(subshell);
    logg("ASTNodeSubshell");
    const { Lparen, Rparen, StmtList, Last, ...rest_subshell } = subshell;
    this.Lparen = ASTSimpleSingle(ASTPos, Lparen)!;
    this.Rparen = ASTSimpleSingle(ASTPos, Rparen)!;
    this.StmtList = ASTSingle(ASTNodeStmtList, StmtList);
    this.Last = ASTArray(ASTNodeComment, Last)!;
    this.rest = rest_subshell;
  }
}
