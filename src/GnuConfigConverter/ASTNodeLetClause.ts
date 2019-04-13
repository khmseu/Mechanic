/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTMoreLetClause } from "./ASTMoreLetClause";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { logg } from "./logg";
import { ILetClause } from "./ParserTypes";

export class ASTNodeLetClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeLetClause = ASTnodeKind.ASTNodeLetClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeLetClause];
  public more: ASTMoreLetClause = new ASTMoreLetClause();
  public Let: ASTPos; //     Let: I_Pos;
  public Exprs: ASTNodeArithmExpr[]; //     Exprs: IArithmExpr[];

  constructor(letclause: ILetClause) {
    super(letclause);
    logg("ASTNodeLetClause");
    this.Let = ASTSimpleSingle(ASTPos, letclause.Let)!;
    this.Exprs = ASTArray(ASTNodeArithmExpr, letclause.Exprs)!;
    ["Let"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTnodeVisitor) {
    visitor.visitASTNodeLetClausePre(this);
    this.Exprs.forEach((e) => e.accept(visitor));
    visitor.visitASTNodeLetClausePost(this);
  }
}
