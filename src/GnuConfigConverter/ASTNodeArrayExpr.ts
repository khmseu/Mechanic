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
  public Lparen: ASTPos; //     Lparen: I_Pos;
  public Rparen: ASTPos; //     Rparen: I_Pos;
  public Elems: ASTNodeArrayElem[]; //     Elems: IArrayElem[] | null;
  public Last: ASTNodeComment[]; //     Last: IComment[];

  constructor(arrayexpr: IArrayExpr) {
    super(arrayexpr);
    logg("ASTNodeArrayExpr");
    const { Lparen, Rparen, Elems, Last, ...rest_arrayexpr } = arrayexpr;
    this.Lparen = ASTSimpleSingle(ASTPos, Lparen)!;
    this.Rparen = ASTSimpleSingle(ASTPos, Rparen)!;
    this.Elems = ASTArray(ASTNodeArrayElem, Elems);
    this.Last = ASTArray(ASTNodeComment, Last)!;
    this.rest = rest_arrayexpr;
  }
}
