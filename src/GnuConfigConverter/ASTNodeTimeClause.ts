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
  public Time: ASTPos; //     Time: I_Pos;
  public PosixFormat: boolean; //     PosixFormat: boolean;
  public Stmt: ASTNodeStmt | null; //     Stmt: IStmt | null;

  constructor(timeclause: ITimeClause) {
    super(timeclause);
    logg("ASTNodeTimeClause");
    const { Time, PosixFormat, Stmt, ...rest_timeclause } = timeclause;
    this.Time = ASTSimpleSingle(ASTPos, Time)!;
    this.PosixFormat = PosixFormat;
    this.Stmt = ASTSingle(ASTNodeStmt, Stmt);
    this.rest = rest_timeclause;
  }
}
