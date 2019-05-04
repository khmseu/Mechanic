/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { IParenTest } from "../ParserTypes";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeTestExpr } from "./ASTNodeTestExpr";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingleNotNull } from "./ASTSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNodeParenTest extends ASTNode {
  public kind: ASTnodeKind.ASTNodeParenTest = ASTnodeKind.ASTNodeParenTest;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeParenTest];
  public Lparen: ASTPos; //     Lparen: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public X: ASTNodeTestExpr; //     X: ITestExpr;

  constructor(parentest: IParenTest, public parent: ASTNode | null, public parentField: string) {
    super(parentest, parent, parentField);
    logg("ASTNodeParenTest");
    this.Lparen = ASTSimpleSingleNotNull(ASTPos, parentest.Lparen);
    this.Rparen = ASTSimpleSingleNotNull(ASTPos, parentest.Rparen);
    this.X = ASTSingleNotNull(ASTNodeTestExpr, parentest.X, this, "X");
    ["kind", "parent", "parentField", "Lparen", "Rparen"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPre(this);
    visitor.visitASTNodeParenTestPre(this);
    this.X.accept(visitor);
    visitor.visitASTNodeParenTestPost(this);
    visitor.visitAllPost(this);
  }
}
