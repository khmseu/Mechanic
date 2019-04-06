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
import { ILit } from "./ParserTypes";

export class ASTNodeLit extends ASTNode {
  public kind: ASTnodeKind.ASTNodeLit = ASTnodeKind.ASTNodeLit;
  public ValuePos: ASTPos; //     ValuePos: I_Pos;
  public ValueEnd: ASTPos; //     ValueEnd: I_Pos;
  public Value: string; //     Value: string;

  constructor(lit: ILit) {
    super(lit);
    logg("ASTNodeLit");
    const { ValuePos, ValueEnd, Value, ...rest_lit } = lit;
    this.ValuePos = ASTSimpleSingle(ASTPos, ValuePos)!;
    this.ValueEnd = ASTSimpleSingle(ASTPos, ValueEnd)!;
    this.Value = Value;
    this.rest = rest_lit;
  }
}
