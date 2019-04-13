/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTMoreSglQuoted } from "./ASTMoreSglQuoted";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { logg } from "./logg";
import { ISglQuoted } from "./ParserTypes";

export class ASTNodeSglQuoted extends ASTNode {
  public kind: ASTnodeKind.ASTNodeSglQuoted = ASTnodeKind.ASTNodeSglQuoted;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeSglQuoted];
  public more: ASTMoreSglQuoted = new ASTMoreSglQuoted();
  public Left: ASTPos; //     Left: I_Pos;
  public Right: ASTPos; //     Right: I_Pos;
  public Dollar: boolean; //     Dollar: boolean;
  public Value: string; //     Value: string;

  constructor(sglquoted: ISglQuoted) {
    super(sglquoted);
    logg("ASTNodeSglQuoted");
    this.Left = ASTSimpleSingle(ASTPos, sglquoted.Left)!;
    this.Right = ASTSimpleSingle(ASTPos, sglquoted.Right)!;
    this.Dollar = sglquoted.Dollar;
    this.Value = sglquoted.Value;
    ["Left", "Right"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeSglQuotedPre(this);

    visitor.visitASTNodeSglQuotedPost(this);
  }
}
