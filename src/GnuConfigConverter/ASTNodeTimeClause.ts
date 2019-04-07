/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { ITimeClause } from "./ParserTypes";

export class ASTNodeTimeClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeTimeClause = ASTnodeKind.ASTNodeTimeClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeTimeClause];
  public Time: ASTPos; //     Time: I_Pos;
  public PosixFormat: boolean; //     PosixFormat: boolean;
  public Stmt: ASTNodeStmt | null; //     Stmt: IStmt | null;

  constructor(timeclause: ITimeClause) {
    super(timeclause);
    logg("ASTNodeTimeClause");
    this.Time = ASTSimpleSingle(ASTPos, timeclause.Time)!;
    this.PosixFormat = timeclause.PosixFormat;
    this.Stmt = ASTSingle(ASTNodeStmt, timeclause.Stmt);
  }
}
