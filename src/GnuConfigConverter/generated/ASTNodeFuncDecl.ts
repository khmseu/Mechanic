/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IFuncDecl } from "../ParserTypes";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingle } from "./ASTSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeFuncDecl extends ASTNode {
  public kind: ASTnodeKind.ASTNodeFuncDecl = ASTnodeKind.ASTNodeFuncDecl;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeFuncDecl];
  public Position: ASTPos; //     Position: I_Pos;
  public RsrvWord: boolean; //     RsrvWord: boolean;
  public Name: ASTNodeLit | null; //     Name: ILit | null;
  public Body: ASTNodeStmt | null; //     Body: IStmt | null;

  constructor(funcdecl: IFuncDecl, public parent: ASTNode | null, public parentField: string) {
    super(funcdecl, parent, parentField);
    logg("ASTNodeFuncDecl");
    this.Position = ASTSimpleSingleNotNull(ASTPos, funcdecl.Position);
    this.RsrvWord = funcdecl.RsrvWord;
    this.Name = ASTSingle(ASTNodeLit, funcdecl.Name, this, "Name");
    this.Body = ASTSingle(ASTNodeStmt, funcdecl.Body, this, "Body");
    ["kind", "parent", "parentField", "Position"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeFuncDeclPre(this);
    visitor.visitAllPreAfter(this);
    if (this.Body) {
      this.Body.accept(visitor);
    }
    if (this.Body) {
      this.Body.accept(visitor);
    }
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeFuncDeclPost(this);
    visitor.visitAllPostAfter(this);
  }
}
