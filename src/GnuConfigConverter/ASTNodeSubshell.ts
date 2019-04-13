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
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
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

  constructor(subshell: ISubshell, public parent: ASTNode | null) {
    super(subshell, parent);
    logg("ASTNodeSubshell");
    this.Lparen = ASTSimpleSingle(ASTPos, subshell.Lparen)!;
    this.Rparen = ASTSimpleSingle(ASTPos, subshell.Rparen)!;
    this.StmtList = ASTSingle(ASTNodeStmtList, subshell.StmtList, this);
    this.Last = ASTArray(ASTNodeComment, subshell.Last, this)!;
    ["Lparen", "Rparen"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeSubshellPre(this);
    if (this.StmtList) {
      this.StmtList.accept(visitor);
    }
    this.Last.forEach((e) => e.accept(visitor));
    visitor.visitASTNodeSubshellPost(this);
  }
}
