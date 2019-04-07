/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { logg } from "./logg";
import { ILetClause } from "./ParserTypes";

export class ASTNodeLetClause extends ASTNode {
  public kind: ASTnodeKind.ASTNodeLetClause = ASTnodeKind.ASTNodeLetClause;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeLetClause];
  public Let: ASTPos; //     Let: I_Pos;
  public Exprs: ASTNodeArithmExpr[]; //     Exprs: IArithmExpr[];

  constructor(letclause: ILetClause) {
    super(letclause);
    logg("ASTNodeLetClause");
    this.Let = ASTSimpleSingle(ASTPos, letclause.Let)!;
    this.Exprs = ASTArray(ASTNodeArithmExpr, letclause.Exprs)!;
  }
}
