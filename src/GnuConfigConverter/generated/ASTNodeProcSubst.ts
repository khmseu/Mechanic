/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IProcSubst, ProcOperator } from "../ParserTypes";
import { op, Token } from "../Token";
import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeProcSubst extends ASTNode {
  public kind: ASTnodeKind.ASTNodeProcSubst = ASTnodeKind.ASTNodeProcSubst;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeProcSubst];
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public Op: string; //     Op: ProcOperator;
  public OpString: string;
  public Stmts: ASTNodeStmt[]; //     Stmts: IStmt[] | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(procsubst: IProcSubst, public parent: ASTNode | null, public parentField: string) {
    super(procsubst, parent, parentField);
    logg("ASTNodeProcSubst");
    this.OpPos = ASTSimpleSingleNotNull(ASTPos, procsubst.OpPos);
    this.Rparen = ASTSimpleSingleNotNull(ASTPos, procsubst.Rparen);
    this.Op = ProcOperator[procsubst.Op];
    this.OpString = op((procsubst.Op as unknown) as Token);
    this.Stmts = ASTArray(ASTNodeStmt, procsubst.Stmts, this, "Stmts");
    this.Last = ASTArray(ASTNodeComment, procsubst.Last, this, "Last");
    ["kind", "parent", "parentField", "OpPos", "Rparen"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeProcSubstPre(this);
    visitor.visitAllPreAfter(this);
    this.Last.forEach((e) => e.accept(visitor));
    this.Last.forEach((e) => e.accept(visitor));
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeProcSubstPost(this);
    visitor.visitAllPostAfter(this);
  }
}
