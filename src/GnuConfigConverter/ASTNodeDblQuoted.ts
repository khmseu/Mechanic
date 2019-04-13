/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTMoreDblQuoted } from "./ASTMoreDblQuoted";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTNodeWordPart } from "./ASTNodeWordPart";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { logg } from "./logg";
import { IDblQuoted } from "./ParserTypes";

export class ASTNodeDblQuoted extends ASTNode {
  public kind: ASTnodeKind.ASTNodeDblQuoted = ASTnodeKind.ASTNodeDblQuoted;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeDblQuoted];
  public more: ASTMoreDblQuoted = new ASTMoreDblQuoted();
  public Position: ASTPos; //     Position: I_Pos;
  public Dollar: boolean; //     Dollar: boolean;
  public Parts: ASTNodeWordPart[]; //     Parts: IWordPart[];

  constructor(dblquoted: IDblQuoted) {
    super(dblquoted);
    logg("ASTNodeDblQuoted");
    this.Position = ASTSimpleSingle(ASTPos, dblquoted.Position)!;
    this.Dollar = dblquoted.Dollar;
    this.Parts = ASTArray(ASTNodeWordPart, dblquoted.Parts)!;
    ["Position"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeDblQuotedPre(this);
    this.Parts.forEach((e) => e.accept(visitor));
    visitor.visitASTNodeDblQuotedPost(this);
  }
}
