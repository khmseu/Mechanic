/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IDblQuoted } from "../ParserTypes";
import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWordPart } from "./ASTNodeWordPart";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeDblQuoted extends ASTNode {
  public kind: ASTnodeKind.ASTNodeDblQuoted = ASTnodeKind.ASTNodeDblQuoted;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeDblQuoted];
  public Position: ASTPos; //     Position: I_Pos;
  public Dollar: boolean; //     Dollar: boolean;
  public Parts: ASTNodeWordPart[]; //     Parts: IWordPart[];

  constructor(dblquoted: IDblQuoted, public parent: ASTNode | null, public parentField: string) {
    super(dblquoted, parent, parentField);
    logg("ASTNodeDblQuoted");
    this.Position = ASTSimpleSingleNotNull(ASTPos, dblquoted.Position);
    this.Dollar = dblquoted.Dollar;
    this.Parts = ASTArray(ASTNodeWordPart, dblquoted.Parts, this, "Parts");
    ["kind", "parent", "parentField", "Position"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPre(this);
    visitor.visitASTNodeDblQuotedPre(this);
    this.Parts.forEach((e) => e.accept(visitor));
    visitor.visitASTNodeDblQuotedPost(this);
    visitor.visitAllPost(this);
  }
}
