/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { INode } from "../ParserTypes";
import { ASTCall } from "./ASTCall";
import { ASTMore } from "./ASTMore";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTVisitorBase } from "./ASTVisitorBase";

export class ASTNode {
  public kind: ASTnodeKind = ASTnodeKind.bad;
  public kindString: string = ASTnodeKind[ASTnodeKind.bad];
  public more: ASTMore = new ASTMore();
  public Pos: ASTPos | null; //     Pos: (() => I_Pos) | null;
  public End: ASTPos | null; //     End: (() => I_Pos) | null;

  constructor(node: INode, public parent: ASTNode | null, public parentField: string) {
    logg("ASTNode");
    this.Pos = ASTSimpleSingle(ASTPos, ASTCall(node.Pos));
    this.End = ASTSimpleSingle(ASTPos, ASTCall(node.End));
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
