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
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeAssign];
  public Append: boolean; //     Append: boolean;
  public Naked: boolean; //     Naked: boolean;
  public Name: ASTNodeLit | null; //     Name: ILit | null;
  public Index: ASTNodeArithmExpr; //     Index: IArithmExpr;
  public Value: ASTNodeWord | null; //     Value: IWord | null;
  public Array: ASTNodeArrayExpr | null; //     Array: IArrayExpr | null;

  constructor(assign: IAssign) {
    super(assign);
    logg("ASTNodeAssign");
    this.Append = assign.Append;
    this.Naked = assign.Naked;
    this.Name = ASTSingle(ASTNodeLit, assign.Name);
    this.Index = ASTSingle(ASTNodeArithmExpr, assign.Index)!;
    this.Value = ASTSingle(ASTNodeWord, assign.Value);
    this.Array = ASTSingle(ASTNodeArrayExpr, assign.Array);
  }
}
