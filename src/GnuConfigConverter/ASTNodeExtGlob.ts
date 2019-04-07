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
import { op, Token } from "./Token";

export class ASTNodeExtGlob extends ASTNode {
  public kind: ASTnodeKind.ASTNodeExtGlob = ASTnodeKind.ASTNodeExtGlob;
  public kindString: string = ASTnodeKind[ASTnodeKind.ASTNodeExtGlob];
  public OpPos: ASTPos; //     OpPos: I_Pos;
  public Op: string; //     Op: GlobOperator;
  public OpString: string;
  public Pattern: ASTNodeLit | null; //     Pattern: ILit | null;

  constructor(extglob: IExtGlob) {
    super(extglob);
    logg("ASTNodeExtGlob");
    this.OpPos = ASTSimpleSingle(ASTPos, extglob.OpPos)!;
    this.Op = GlobOperator[extglob.Op];
    this.OpString = op((extglob.Op as unknown) as Token);
    this.Pattern = ASTSingle(ASTNodeLit, extglob.Pattern);
  }
}
