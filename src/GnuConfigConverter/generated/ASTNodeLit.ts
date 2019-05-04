/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { ILit } from "../ParserTypes";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeLit extends ASTNode {
  public kind: ASTnodeKind.ASTNodeLit = ASTnodeKind.ASTNodeLit;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeLit];
  public ValuePos: ASTPos; //     ValuePos: I_Pos;
  public ValueEnd: ASTPos; //     ValueEnd: I_Pos;
  public Value: string; //     Value: string;

  constructor(lit: ILit, public parent: ASTNode | null, public parentField: string) {
    super(lit, parent, parentField);
    logg("ASTNodeLit");
    this.ValuePos = ASTSimpleSingleNotNull(ASTPos, lit.ValuePos);
    this.ValueEnd = ASTSimpleSingleNotNull(ASTPos, lit.ValueEnd);
    this.Value = lit.Value;
    ["kind", "parent", "parentField", "ValuePos", "ValueEnd"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPre(this);
    visitor.visitASTNodeLitPre(this);

    visitor.visitASTNodeLitPost(this);
    visitor.visitAllPost(this);
  }
}
