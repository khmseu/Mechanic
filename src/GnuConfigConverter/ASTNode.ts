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
  public kindString: string = ASTnodeKind[ASTnodeKind.bad];
  public Pos: ASTPos | null; //     Pos: (() => I_Pos) | null;
  public End: ASTPos | null; //     End: (() => I_Pos) | null;

  constructor(node: INode) {
    logg("ASTNode");
    this.Pos = node.Pos ? ASTSimpleSingle(ASTPos, node.Pos()) : null;
    this.End = node.End ? ASTSimpleSingle(ASTPos, node.End()) : null;
  }
}
