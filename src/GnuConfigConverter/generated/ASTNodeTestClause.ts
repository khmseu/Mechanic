/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { ITestClause } from "../ParserTypes";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeTestExpr } from "./ASTNodeTestExpr";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingleNotNull } from "./ASTSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeTestClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeTestClause = ASTnodeKind.ASTNodeTestClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeTestClause];
  public Left: ASTPos; //     Left: I_Pos;
  public Right: ASTPos; //     Right: I_Pos;
  public X: ASTNodeTestExpr; //     X: ITestExpr;

  constructor(testclause: ITestClause, public parent: ASTNode | null, public parentField: string) {
    super(testclause, parent, parentField);
    logg("ASTNodeTestClause");
    this.Left = ASTSimpleSingleNotNull(ASTPos, testclause.Left);
    this.Right = ASTSimpleSingleNotNull(ASTPos, testclause.Right);
    this.X = ASTSingleNotNull(ASTNodeTestExpr, testclause.X, this, "X");
    ["kind", "parent", "parentField", "Left", "Right"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPreBefore(this);
    visitor.visitASTNodeTestClausePre(this);
    visitor.visitAllPreAfter(this);
    this.X.accept(visitor);
    visitor.visitAllPostBefore(this);
    visitor.visitASTNodeTestClausePost(this);
    visitor.visitAllPostAfter(this);
  }
}
