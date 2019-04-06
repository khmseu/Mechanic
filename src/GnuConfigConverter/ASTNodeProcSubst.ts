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

export class ASTNodeProcSubst extends ASTNode {
  public kind: ASTnodeKind.ASTNodeProcSubst = ASTnodeKind.ASTNodeProcSubst;
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public Op: ProcOperator; //     Op: ProcOperator;
  public Stmts: ASTNodeStmt[]; //     Stmts: IStmt[] | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(procsubst: IProcSubst) {
    super(procsubst);
    logg("ASTNodeProcSubst");
    const { OpPos, Rparen, Op, Stmts, Last, ...rest_procsubst } = procsubst;
    this.OpPos = ASTSimpleSingle(ASTPos, OpPos)!;
    this.Rparen = ASTSimpleSingle(ASTPos, Rparen)!;
    this.Op = Op;
    this.Stmts = ASTArray(ASTNodeStmt, Stmts);
    this.Last = ASTArray(ASTNodeComment, Last)!;
    this.rest = rest_procsubst;
  }
}
