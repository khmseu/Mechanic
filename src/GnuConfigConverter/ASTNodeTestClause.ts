/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeTestExpr } from "./ASTNodeTestExpr";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { ITestClause } from "./ParserTypes";

export class ASTNodeTestClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeTestClause = ASTnodeKind.ASTNodeTestClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeTestClause];
  public Left: ASTPos; //     Left: I_Pos;
  public Right: ASTPos; //     Right: I_Pos;
  public X: ASTNodeTestExpr; //     X: ITestExpr;

  constructor(testclause: ITestClause) {
    super(testclause);
    logg("ASTNodeTestClause");
    this.Left = ASTSimpleSingle(ASTPos, testclause.Left)!;
    this.Right = ASTSimpleSingle(ASTPos, testclause.Right)!;
    this.X = ASTSingle(ASTNodeTestExpr, testclause.X)!;
  }
}
