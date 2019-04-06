/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTNodeArrayExpr } from "./ASTNodeArrayExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IAssign } from "./ParserTypes";

export class ASTNodeAssign extends ASTNode {
  public kind: ASTnodeKind.ASTNodeAssign = ASTnodeKind.ASTNodeAssign;
  public Append: boolean; //     Append: boolean;
  public Naked: boolean; //     Naked: boolean;
  public Name: ASTNodeLit | null; //     Name: ILit | null;
  public Index: ASTNodeArithmExpr; //     Index: IArithmExpr;
  public Value: ASTNodeWord | null; //     Value: IWord | null;
  public Array: ASTNodeArrayExpr | null; //     Array: IArrayExpr | null;

  constructor(assign: IAssign) {
    super(assign);
    logg("ASTNodeAssign");
    const { Append, Naked, Name, Index, Value, Array, ...rest_assign } = assign;
    this.Append = Append;
    this.Naked = Naked;
    this.Name = ASTSingle(ASTNodeLit, Name);
    this.Index = ASTSingle(ASTNodeArithmExpr, Index)!;
    this.Value = ASTSingle(ASTNodeWord, Value);
    this.Array = ASTSingle(ASTNodeArrayExpr, Array);
    this.rest = rest_assign;
  }
}
