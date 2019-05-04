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
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingleNotNull } from "./ASTSimpleSingleNotNull";
import { ASTSingleNotNull } from "./ASTSingleNotNull";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { logg } from "./logg";
import { IParenArithm } from "./ParserTypes";

export class ASTNodeParenArithm extends ASTNode {
  public kind: ASTnodeKind.ASTNodeParenArithm = ASTnodeKind.ASTNodeParenArithm;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeParenArithm];
  public more: ASTMoreParenArithm = new ASTMoreParenArithm();
  public Lparen: ASTPos; //     Lparen: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public X: ASTNodeArithmExpr; //     X: IArithmExpr;

  constructor(parenarithm: IParenArithm, public parent: ASTNode | null, public parentField: string) {
    super(parenarithm, parent, parentField);
    logg("ASTNodeParenArithm");
    this.Lparen = ASTSimpleSingleNotNull(ASTPos, parenarithm.Lparen);
    this.Rparen = ASTSimpleSingleNotNull(ASTPos, parenarithm.Rparen);
    this.X = ASTSingleNotNull(ASTNodeArithmExpr, parenarithm.X, this, "X");
    ["kind", "parent", "parentField", "Lparen", "Rparen"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor.visitAllPre(this);
    visitor.visitASTNodeParenArithmPre(this);
    this.X.accept(visitor);
    visitor.visitASTNodeParenArithmPost(this);
    visitor.visitAllPost(this);
  }
}
