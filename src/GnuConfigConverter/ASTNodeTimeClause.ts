/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTMoreTimeClause } from "./ASTMoreTimeClause";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { logg } from "./logg";
import { ITimeClause } from "./ParserTypes";

export class ASTNodeTimeClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeTimeClause = ASTnodeKind.ASTNodeTimeClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeTimeClause];
  public more: ASTMoreTimeClause = new ASTMoreTimeClause();
  public Time: ASTPos; //     Time: I_Pos;
  public PosixFormat: boolean; //     PosixFormat: boolean;
  public Stmt: ASTNodeStmt | null; //     Stmt: IStmt | null;

  constructor(timeclause: ITimeClause, public parent: ASTNode | null, public parentField: string) {
    super(timeclause, parent, parentField);
    logg("ASTNodeTimeClause");
    this.Time = ASTSimpleSingle(ASTPos, timeclause.Time)!;
    this.PosixFormat = timeclause.PosixFormat;
    this.Stmt = ASTSingle(ASTNodeStmt, timeclause.Stmt, this, "Stmt");
    ["kind", "parent", "parentField", "Time"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitASTNodeTimeClausePre(this);
    if (this.Stmt) {
      this.Stmt.accept(visitor);
    }
    visitor.visitASTNodeTimeClausePost(this);
  }
}
