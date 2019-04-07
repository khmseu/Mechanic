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
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeSubshell];
  public Lparen: ASTPos; //     Lparen: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public StmtList: ASTNodeStmtList | null; //     StmtList: IStmtList | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(subshell: ISubshell) {
    super(subshell);
    logg("ASTNodeSubshell");
    this.Lparen = ASTSimpleSingle(ASTPos, subshell.Lparen)!;
    this.Rparen = ASTSimpleSingle(ASTPos, subshell.Rparen)!;
    this.StmtList = ASTSingle(ASTNodeStmtList, subshell.StmtList);
    this.Last = ASTArray(ASTNodeComment, subshell.Last)!;
  }
}
