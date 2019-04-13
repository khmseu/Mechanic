/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTMoreParenTest } from "./ASTMoreParenTest";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeTestExpr } from "./ASTNodeTestExpr";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IParenTest } from "./ParserTypes";

export class ASTNodeParenTest extends ASTNode {
  public kind: ASTnodeKind.ASTNodeParenTest = ASTnodeKind.ASTNodeParenTest;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeParenTest];
  public more: ASTMoreParenTest = new ASTMoreParenTest();
  public Lparen: ASTPos; //     Lparen: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public X: ASTNodeTestExpr; //     X: ITestExpr;

  constructor(parentest: IParenTest) {
    super(parentest);
    logg("ASTNodeParenTest");
    this.Lparen = ASTSimpleSingle(ASTPos, parentest.Lparen)!;
    this.Rparen = ASTSimpleSingle(ASTPos, parentest.Rparen)!;
    this.X = ASTSingle(ASTNodeTestExpr, parentest.X)!;
    ["Lparen", "Rparen"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeParenTestPre(this);
    this.X.accept(visitor);
    visitor.visitASTNodeParenTestPost(this);
  }
}
