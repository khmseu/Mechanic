/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTMoreCoprocClause } from "./ASTMoreCoprocClause";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { logg } from "./logg";
import { ICoprocClause } from "./ParserTypes";

export class ASTNodeCoprocClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeCoprocClause = ASTnodeKind.ASTNodeCoprocClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeCoprocClause];
  public more: ASTMoreCoprocClause = new ASTMoreCoprocClause();
  public Coproc: ASTPos; //     Coproc: I_Pos;
  public Name: ASTNodeWord | null; //     Name: IWord | null;
  public Stmt: ASTNodeStmt | null; //     Stmt: IStmt | null;

  constructor(coprocclause: ICoprocClause, public parent: ASTNode | null, public parentField: string) {
    super(coprocclause, parent, parentField);
    logg("ASTNodeCoprocClause");
    this.Coproc = ASTSimpleSingle(ASTPos, coprocclause.Coproc)!;
    this.Name = ASTSingle(ASTNodeWord, coprocclause.Name, this, "Name");
    this.Stmt = ASTSingle(ASTNodeStmt, coprocclause.Stmt, this, "Stmt");
    ["kind", "parent", "parentField", "Coproc"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitASTNodeCoprocClausePre(this);
    if (this.Name) {
      this.Name.accept(visitor);
    }
    if (this.Stmt) {
      this.Stmt.accept(visitor);
    }
    visitor.visitASTNodeCoprocClausePost(this);
  }
}
