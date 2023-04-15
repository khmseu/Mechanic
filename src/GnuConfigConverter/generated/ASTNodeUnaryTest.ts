/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IUnaryTest, UnTestOperator } from "../ParserTypes";
import { op, Token } from "../Token";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeTestExpr } from "./ASTNodeTestExpr";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingleNotNull } from "./ASTSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeUnaryTest extends ASTNode {
  public kind: ASTnodeKind.ASTNodeUnaryTest = ASTnodeKind.ASTNodeUnaryTest;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeUnaryTest];
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: string; //     Op: UnTestOperator;
  public OpString: string;
  public X: ASTNodeTestExpr; //     X: ITestExpr;

  constructor(unarytest: IUnaryTest, public parent: ASTNode | null, public parentField: string) {
    super(unarytest, parent, parentField);
    logg("ASTNodeUnaryTest");
    this.OpPos = ASTSimpleSingleNotNull(ASTPos, unarytest.OpPos);
    this.Op = UnTestOperator[unarytest.Op];
    this.OpString = op((unarytest.Op as unknown) as Token);
    this.X = ASTSingleNotNull(ASTNodeTestExpr, unarytest.X, this, "X");
    ["kind", "parent", "parentField", "OpPos"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeUnaryTestPre(this);
    visitor.visitAllPreAfter(this);
    this.X.accept(visitor);
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeUnaryTestPost(this);
    visitor.visitAllPostAfter(this);
  }
}
