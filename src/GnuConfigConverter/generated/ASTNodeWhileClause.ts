/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IWhileClause } from "../ParserTypes";
import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";

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

  constructor(whileclause: IWhileClause, public parent: ASTNode | null, public parentField: string) {
    super(whileclause, parent, parentField);
    logg("ASTNodeWhileClause");
    this.WhilePos = ASTSimpleSingleNotNull(ASTPos, whileclause.WhilePos);
    this.DoPos = ASTSimpleSingleNotNull(ASTPos, whileclause.DoPos);
    this.DonePos = ASTSimpleSingleNotNull(ASTPos, whileclause.DonePos);
    this.Until = whileclause.Until;
    this.Cond = ASTSingle(ASTNodeStmtList, whileclause.Cond, this, "Cond");
    this.CondLast = ASTArray(ASTNodeComment, whileclause.CondLast, this, "CondLast");
    this.Do = ASTSingle(ASTNodeStmtList, whileclause.Do, this, "Do");
    this.DoLast = ASTArray(ASTNodeComment, whileclause.DoLast, this, "DoLast");
    ["kind", "parent", "parentField", "WhilePos", "DoPos", "DonePos"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeWhileClausePre(this);
    visitor.visitAllPreAfter(this);
    if (this.Cond) {
      this.Cond.accept(visitor);
    }
    this.CondLast.forEach((e) => e.accept(visitor));
    if (this.Do) {
      this.Do.accept(visitor);
    }
    this.DoLast.forEach((e) => e.accept(visitor));
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeWhileClausePost(this);
    visitor.visitAllPostAfter(this);
  }
}
