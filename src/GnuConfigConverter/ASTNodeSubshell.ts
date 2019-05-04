/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTMoreSubshell } from "./ASTMoreSubshell";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { logg } from "./logg";
import { ISubshell } from "./ParserTypes";

export class ASTNodeSubshell extends ASTNode {
  public kind: ASTnodeKind.ASTNodeSubshell = ASTnodeKind.ASTNodeSubshell;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeSubshell];
  public more: ASTMoreSubshell = new ASTMoreSubshell();
  public Lparen: ASTPos; //     Lparen: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public StmtList: ASTNodeStmtList | null; //     StmtList: IStmtList | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(subshell: ISubshell, public parent: ASTNode | null, public parentField: string) {
    super(subshell, parent, parentField);
    logg("ASTNodeSubshell");
    this.Lparen = ASTSimpleSingleNotNull(ASTPos, subshell.Lparen);
    this.Rparen = ASTSimpleSingleNotNull(ASTPos, subshell.Rparen);
    this.StmtList = ASTSingle(ASTNodeStmtList, subshell.StmtList, this, "StmtList");
    this.Last = ASTArray(ASTNodeComment, subshell.Last, this, "Last");
    ["kind", "parent", "parentField", "Lparen", "Rparen"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPre(this);
    visitor.visitASTNodeSubshellPre(this);
    if (this.StmtList) {
      this.StmtList.accept(visitor);
    }
    this.Last.forEach((e) => e.accept(visitor));
    visitor.visitASTNodeSubshellPost(this);
    visitor.visitAllPost(this);
  }
}
