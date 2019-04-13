/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTMoreParenArithm } from "./ASTMoreParenArithm";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IParenArithm } from "./ParserTypes";

export class ASTNodeParenArithm extends ASTNode {
  public kind: ASTnodeKind.ASTNodeParenArithm = ASTnodeKind.ASTNodeParenArithm;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeParenArithm];
  public more: ASTMoreParenArithm = new ASTMoreParenArithm();
  public Lparen: ASTPos; //     Lparen: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public X: ASTNodeArithmExpr; //     X: IArithmExpr;

  constructor(parenarithm: IParenArithm) {
    super(parenarithm);
    logg("ASTNodeParenArithm");
    this.Lparen = ASTSimpleSingle(ASTPos, parenarithm.Lparen)!;
    this.Rparen = ASTSimpleSingle(ASTPos, parenarithm.Rparen)!;
    this.X = ASTSingle(ASTNodeArithmExpr, parenarithm.X)!;
    ["Lparen", "Rparen"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeParenArithmPre(this);
    this.X.accept(visitor);
    visitor.visitASTNodeParenArithmPost(this);
  }
}
