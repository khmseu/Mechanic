/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { logg } from "./logg";
import { INode } from "./ParserTypes";

export class ASTNode {
  public kind: ASTnodeKind = ASTnodeKind.bad;
  public kindString: string = ASTnodeKind[ASTnodeKind.bad];
  public more: { [key: string]: any } = {};
  public Pos: ASTPos | null; //     Pos: (() => I_Pos) | null;
  public End: ASTPos | null; //     End: (() => I_Pos) | null;

  constructor(node: INode, public parent: ASTNode | null, public parentField: string) {
    logg("ASTNode");
    this.Pos = node.Pos ? ASTSimpleSingle(ASTPos, node.Pos()) : null;
    this.End = node.End ? ASTSimpleSingle(ASTPos, node.End()) : null;
    ["kind", "parent", "parentField", "Pos", "End"].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
  public accept(visitor: ASTVisitorBase) {
    visitor = visitor;
  }
}
