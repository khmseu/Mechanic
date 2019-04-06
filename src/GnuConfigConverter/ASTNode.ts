/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { logg } from "./logg";
import { INode } from "./ParserTypes";

export class ASTNode {
  public kind: ASTnodeKind = ASTnodeKind.bad;
  public rest: object | null;
  public Pos: ASTPos; //     Pos: () => I_Pos;
  public End: ASTPos; //     End: () => I_Pos;

  constructor(node: INode) {
    logg("ASTNode");
    const { Pos, End, ...rest_node } = node;
    this.Pos = ASTSimpleSingle(ASTPos, Pos())!;
    this.End = ASTSimpleSingle(ASTPos, End())!;
    this.rest = rest_node;
  }
}
