/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IForClause } from "../ParserTypes";
import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLoop } from "./ASTNodeLoop";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingle } from "./ASTSingle";
import { ASTSingleNotNull } from "./ASTSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeForClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeForClause = ASTnodeKind.ASTNodeForClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeForClause];
  public ForPos: ASTPos; //     ForPos: I_Pos;
  public DoPos: ASTPos; //     DoPos: I_Pos;
  public DonePos: ASTPos; //     DonePos: I_Pos;
  public Select: boolean; //     Select: boolean;
  public Loop: ASTNodeLoop; //     Loop: ILoop;
  public Do: ASTNodeStmtList | null; //     Do: IStmtList | null;
  public DoLast: ASTNodeComment[]; //     DoLast: IComment[];

  constructor(forclause: IForClause, public parent: ASTNode | null, public parentField: string) {
    super(forclause, parent, parentField);
    logg("ASTNodeForClause");
    this.ForPos = ASTSimpleSingleNotNull(ASTPos, forclause.ForPos);
    this.DoPos = ASTSimpleSingleNotNull(ASTPos, forclause.DoPos);
    this.DonePos = ASTSimpleSingleNotNull(ASTPos, forclause.DonePos);
    this.Select = forclause.Select;
    this.Loop = ASTSingleNotNull(ASTNodeLoop, forclause.Loop, this, "Loop");
    this.Do = ASTSingle(ASTNodeStmtList, forclause.Do, this, "Do");
    this.DoLast = ASTArray(ASTNodeComment, forclause.DoLast, this, "DoLast");
    ["kind", "parent", "parentField", "ForPos", "DoPos", "DonePos"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeForClausePre(this);
    visitor.visitAllPreAfter(this);
    this.Loop.accept(visitor);
    if (this.Do) {
      this.Do.accept(visitor);
    }
    this.DoLast.forEach((e) => e.accept(visitor));
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeForClausePost(this);
    visitor.visitAllPostAfter(this);
  }
}
