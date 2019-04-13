/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTMoreLit } from "./ASTMoreLit";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { logg } from "./logg";
import { ILit } from "./ParserTypes";

export class ASTNodeLit extends ASTNode {
  public kind: ASTnodeKind.ASTNodeLit = ASTnodeKind.ASTNodeLit;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeLit];
  public more: ASTMoreLit = new ASTMoreLit();
  public ValuePos: ASTPos; //     ValuePos: I_Pos;
  public ValueEnd: ASTPos; //     ValueEnd: I_Pos;
  public Value: string; //     Value: string;

  constructor(lit: ILit) {
    super(lit);
    logg("ASTNodeLit");
    this.ValuePos = ASTSimpleSingle(ASTPos, lit.ValuePos)!;
    this.ValueEnd = ASTSimpleSingle(ASTPos, lit.ValueEnd)!;
    this.Value = lit.Value;
    ["ValuePos", "ValueEnd"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeLitPre(this);

    visitor.visitASTNodeLitPost(this);
  }
}
