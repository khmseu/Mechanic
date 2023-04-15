/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IStmt } from "../ParserTypes";
import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeCommand } from "./ASTNodeCommand";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeRedirect } from "./ASTNodeRedirect";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingleNotNull } from "./ASTSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";

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

  constructor(stmt: IStmt, public parent: ASTNode | null, public parentField: string) {
    super(stmt, parent, parentField);
    logg("ASTNodeStmt");
    this.Comments = ASTArray(ASTNodeComment, stmt.Comments, this, "Comments");
    this.Cmd = ASTSingleNotNull(ASTNodeCommand, stmt.Cmd, this, "Cmd");
    this.Position = ASTSimpleSingleNotNull(ASTPos, stmt.Position);
    this.Semicolon = ASTSimpleSingleNotNull(ASTPos, stmt.Semicolon);
    this.Negated = stmt.Negated;
    this.Background = stmt.Background;
    this.Coprocess = stmt.Coprocess;
    this.Redirs = ASTArray(ASTNodeRedirect, stmt.Redirs, this, "Redirs");
    ["kind", "parent", "parentField", "Position", "Semicolon"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeStmtPre(this);
    visitor.visitAllPreAfter(this);
    this.Comments.forEach((e) => e.accept(visitor));
    this.Cmd.accept(visitor);
    this.Redirs.forEach((e) => e.accept(visitor));
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeStmtPost(this);
    visitor.visitAllPostAfter(this);
  }
}
