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
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { logg } from "./logg";
import { IProcSubst, ProcOperator } from "./ParserTypes";
import { op, Token } from "./Token";

export class ASTNodeProcSubst extends ASTNode {
  public kind: ASTnodeKind.ASTNodeProcSubst = ASTnodeKind.ASTNodeProcSubst;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeProcSubst];
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public Op: string; //     Op: ProcOperator;
  public OpString: string;
  public Stmts: ASTNodeStmt[]; //     Stmts: IStmt[] | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(procsubst: IProcSubst) {
    super(procsubst);
    logg("ASTNodeProcSubst");
    this.OpPos = ASTSimpleSingle(ASTPos, procsubst.OpPos)!;
    this.Rparen = ASTSimpleSingle(ASTPos, procsubst.Rparen)!;
    this.Op = ProcOperator[procsubst.Op];
    this.OpString = op((procsubst.Op as unknown) as Token);
    this.Stmts = ASTArray(ASTNodeStmt, procsubst.Stmts);
    this.Last = ASTArray(ASTNodeComment, procsubst.Last)!;
  }
}
