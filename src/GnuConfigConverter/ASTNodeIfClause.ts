/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTMoreIfClause } from "./ASTMoreIfClause";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IIfClause } from "./ParserTypes";

export class ASTNodeIfClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeIfClause = ASTnodeKind.ASTNodeIfClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeIfClause];
  public more: ASTMoreIfClause = new ASTMoreIfClause();
  public Position: ASTPos; //     Position: I_Pos;
  public ThenPos: ASTPos; //     ThenPos: I_Pos;
  public FiPos: ASTPos; //     FiPos: I_Pos;
  public Cond: ASTNodeStmtList | null; //     Cond: IStmtList | null;
  public CondLast: ASTNodeComment[]; //     CondLast: IComment[];
  public Then: ASTNodeStmtList | null; //     Then: IStmtList | null;
  public ThenLast: ASTNodeComment[]; //     ThenLast: IComment[];
  public Else: ASTNodeIfClause | null; //     Else: IIfClause | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(ifclause: IIfClause, public parent: ASTNode | null) {
    super(ifclause, parent);
    logg("ASTNodeIfClause");
    this.Position = ASTSimpleSingle(ASTPos, ifclause.Position)!;
    this.ThenPos = ASTSimpleSingle(ASTPos, ifclause.ThenPos)!;
    this.FiPos = ASTSimpleSingle(ASTPos, ifclause.FiPos)!;
    this.Cond = ASTSingle(ASTNodeStmtList, ifclause.Cond, this);
    this.CondLast = ASTArray(ASTNodeComment, ifclause.CondLast, this)!;
    this.Then = ASTSingle(ASTNodeStmtList, ifclause.Then, this);
    this.ThenLast = ASTArray(ASTNodeComment, ifclause.ThenLast, this)!;
    this.Else = ASTSingle(ASTNodeIfClause, ifclause.Else, this);
    this.Last = ASTArray(ASTNodeComment, ifclause.Last, this)!;
    ["Position", "ThenPos", "FiPos"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeIfClausePre(this);
    if (this.Cond) {
      this.Cond.accept(visitor);
    }
    this.CondLast.forEach((e) => e.accept(visitor));
    if (this.Then) {
      this.Then.accept(visitor);
    }
    this.ThenLast.forEach((e) => e.accept(visitor));
    if (this.Else) {
      this.Else.accept(visitor);
    }
    this.Last.forEach((e) => e.accept(visitor));
    visitor.visitASTNodeIfClausePost(this);
  }
}
