/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IArrayElem } from "./ParserTypes";

export class ASTNodeArrayElem extends ASTNode {
  public kind: ASTnodeKind.ASTNodeArrayElem = ASTnodeKind.ASTNodeArrayElem;
  public Index: ASTNodeArithmExpr; //     Index: IArithmExpr;
  public Value: ASTNodeWord | null; //     Value: IWord | null;
  public Comments: ASTNodeComment[]; //     Comments: IComment[];

  constructor(arrayelem: IArrayElem) {
    super(arrayelem);
    logg("ASTNodeArrayElem");
    const { Index, Value, Comments, ...rest_arrayelem } = arrayelem;
    this.Index = ASTSingle(ASTNodeArithmExpr, Index)!;
    this.Value = ASTSingle(ASTNodeWord, Value);
    this.Comments = ASTArray(ASTNodeComment, Comments)!;
    this.rest = rest_arrayelem;
  }
}
