/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTMoreBinaryTest } from "./ASTMoreBinaryTest";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeTestExpr } from "./ASTNodeTestExpr";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { BinTestOperator, IBinaryTest } from "./ParserTypes";
import { op, Token } from "./Token";

export class ASTNodeBinaryTest extends ASTNode {
  public kind: ASTnodeKind.ASTNodeBinaryTest = ASTnodeKind.ASTNodeBinaryTest;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeBinaryTest];
  public more: ASTMoreBinaryTest = new ASTMoreBinaryTest();
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: string; //     Op: BinTestOperator;
  public OpString: string;
  public X: ASTNodeTestExpr; //     X: ITestExpr;
  public Y: ASTNodeTestExpr; //     Y: ITestExpr;

  constructor(binarytest: IBinaryTest, public parent: ASTNode | null) {
    super(binarytest, parent);
    logg("ASTNodeBinaryTest");
    this.OpPos = ASTSimpleSingle(ASTPos, binarytest.OpPos)!;
    this.Op = BinTestOperator[binarytest.Op];
    this.OpString = op((binarytest.Op as unknown) as Token);
    this.X = ASTSingle(ASTNodeTestExpr, binarytest.X, this)!;
    this.Y = ASTSingle(ASTNodeTestExpr, binarytest.Y, this)!;
    ["OpPos"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeBinaryTestPre(this);
    this.X.accept(visitor);
    this.Y.accept(visitor);
    visitor.visitASTNodeBinaryTestPost(this);
  }
}
