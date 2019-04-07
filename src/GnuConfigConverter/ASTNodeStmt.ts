/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeCommand } from "./ASTNodeCommand";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeRedirect } from "./ASTNodeRedirect";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IStmt } from "./ParserTypes";

export class ASTNodeStmt extends ASTNode {
  public kind: ASTnodeKind.ASTNodeStmt = ASTnodeKind.ASTNodeStmt;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeStmt];
  public Comments: ASTNodeComment[]; //     Comments: IComment[];
  public Cmd: ASTNodeCommand; //     Cmd: ICommand;
  public Position: ASTPos; //     Position: I_Pos;
  public Semicolon: ASTPos; //     Semicolon: I_Pos;
  public Negated: boolean; //     Negated: boolean;
  public Background: boolean; //     Background: boolean;
  public Coprocess: boolean; //     Coprocess: boolean;
  public Redirs: ASTNodeRedirect[]; //     Redirs: IRedirect[] | null;

  constructor(stmt: IStmt) {
    super(stmt);
    logg("ASTNodeStmt");
    this.Comments = ASTArray(ASTNodeComment, stmt.Comments)!;
    this.Cmd = ASTSingle(ASTNodeCommand, stmt.Cmd)!;
    this.Position = ASTSimpleSingle(ASTPos, stmt.Position)!;
    this.Semicolon = ASTSimpleSingle(ASTPos, stmt.Semicolon)!;
    this.Negated = stmt.Negated;
    this.Background = stmt.Background;
    this.Coprocess = stmt.Coprocess;
    this.Redirs = ASTArray(ASTNodeRedirect, stmt.Redirs);
  }
}
