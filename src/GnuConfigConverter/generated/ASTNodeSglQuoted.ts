/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { ISglQuoted } from "../ParserTypes";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeSglQuoted extends ASTNode {
  public kind: ASTnodeKind.ASTNodeSglQuoted = ASTnodeKind.ASTNodeSglQuoted;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeSglQuoted];
  public Left: ASTPos; //     Left: I_Pos;
  public Right: ASTPos; //     Right: I_Pos;
  public Dollar: boolean; //     Dollar: boolean;
  public Value: string; //     Value: string;

  constructor(sglquoted: ISglQuoted, public parent: ASTNode | null, public parentField: string) {
    super(sglquoted, parent, parentField);
    logg("ASTNodeSglQuoted");
    this.Left = ASTSimpleSingleNotNull(ASTPos, sglquoted.Left);
    this.Right = ASTSimpleSingleNotNull(ASTPos, sglquoted.Right);
    this.Dollar = sglquoted.Dollar;
    this.Value = sglquoted.Value;
    ["kind", "parent", "parentField", "Left", "Right"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPre(this);
    visitor.visitASTNodeSglQuotedPre(this);

    visitor.visitASTNodeSglQuotedPost(this);
    visitor.visitAllPost(this);
  }
}
