/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { GlobOperator, IExtGlob } from "./ParserTypes";

export class ASTNodeExtGlob extends ASTNode {
  public kind: ASTnodeKind.ASTNodeExtGlob = ASTnodeKind.ASTNodeExtGlob;
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: GlobOperator; //     Op: GlobOperator;
  public Pattern: ASTNodeLit | null; //     Pattern: ILit | null;

  constructor(extglob: IExtGlob) {
    super(extglob);
    logg("ASTNodeExtGlob");
    const { OpPos, Op, Pattern, ...rest_extglob } = extglob;
    this.OpPos = ASTSimpleSingle(ASTPos, OpPos)!;
    this.Op = Op;
    this.Pattern = ASTSingle(ASTNodeLit, Pattern);
    this.rest = rest_extglob;
  }
}
