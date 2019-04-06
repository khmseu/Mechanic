/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IFuncDecl } from "./ParserTypes";

export class ASTNodeFuncDecl extends ASTNode {
  public kind: ASTnodeKind.ASTNodeFuncDecl = ASTnodeKind.ASTNodeFuncDecl;
  public Position: ASTPos; //     Position: I_Pos;
  public RsrvWord: boolean; //     RsrvWord: boolean;
  public Name: ASTNodeLit | null; //     Name: ILit | null;
  public Body: ASTNodeStmt | null; //     Body: IStmt | null;

  constructor(funcdecl: IFuncDecl) {
    super(funcdecl);
    logg("ASTNodeFuncDecl");
    const { Position, RsrvWord, Name, Body, ...rest_funcdecl } = funcdecl;
    this.Position = ASTSimpleSingle(ASTPos, Position)!;
    this.RsrvWord = RsrvWord;
    this.Name = ASTSingle(ASTNodeLit, Name);
    this.Body = ASTSingle(ASTNodeStmt, Body);
    this.rest = rest_funcdecl;
  }
}
