/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { logg } from "./logg";
import { ISglQuoted } from "./ParserTypes";

export class ASTNodeSglQuoted extends ASTNode {
  public kind: ASTnodeKind.ASTNodeSglQuoted = ASTnodeKind.ASTNodeSglQuoted;
  public Left: ASTPos; //     Left: I_Pos;
  public Right: ASTPos; //     Right: I_Pos;
  public Dollar: boolean; //     Dollar: boolean;
  public Value: string; //     Value: string;

  constructor(sglquoted: ISglQuoted) {
    super(sglquoted);
    logg("ASTNodeSglQuoted");
    const { Left, Right, Dollar, Value, ...rest_sglquoted } = sglquoted;
    this.Left = ASTSimpleSingle(ASTPos, Left)!;
    this.Right = ASTSimpleSingle(ASTPos, Right)!;
    this.Dollar = Dollar;
    this.Value = Value;
    this.rest = rest_sglquoted;
  }
}
