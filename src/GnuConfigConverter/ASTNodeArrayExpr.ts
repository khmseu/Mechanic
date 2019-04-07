/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeArrayElem } from "./ASTNodeArrayElem";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { logg } from "./logg";
import { IArrayExpr } from "./ParserTypes";

export class ASTNodeArrayExpr extends ASTNode {
  public kind: ASTnodeKind.ASTNodeArrayExpr = ASTnodeKind.ASTNodeArrayExpr;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeArrayExpr];
  public Lparen: ASTPos; //     Lparen: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public Elems: ASTNodeArrayElem[]; //     Elems: IArrayElem[] | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(arrayexpr: IArrayExpr) {
    super(arrayexpr);
    logg("ASTNodeArrayExpr");
    this.Lparen = ASTSimpleSingle(ASTPos, arrayexpr.Lparen)!;
    this.Rparen = ASTSimpleSingle(ASTPos, arrayexpr.Rparen)!;
    this.Elems = ASTArray(ASTNodeArrayElem, arrayexpr.Elems);
    this.Last = ASTArray(ASTNodeComment, arrayexpr.Last)!;
  }
}
