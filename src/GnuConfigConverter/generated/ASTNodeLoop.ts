/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { syntax } from "mvdan-sh";
import { logg } from "../logg";
import { ICStyleLoop, ILoop, IWordIter } from "../ParserTypes";
import { ASTNode } from "./ASTNode";
import { ASTNodeCStyleLoop } from "./ASTNodeCStyleLoop";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWordIter } from "./ASTNodeWordIter";

export class ASTNodeLoop extends ASTNode {
  public kind: ASTnodeKind.bad | ASTnodeKind.ASTNodeWordIter | ASTnodeKind.ASTNodeCStyleLoop = ASTnodeKind.bad;
  public kindString: string = ASTnodeKind[ASTnodeKind.bad];
  constructor(loop: ILoop, public parent: ASTNode | null, public parentField: string) {
    super(loop, parent, parentField);
    logg("ASTNodeLoop");
    switch (syntax.NodeType(loop)) {
      case "WordIter":
        return new ASTNodeWordIter(loop as IWordIter, parent, parentField);
      case "CStyleLoop":
        return new ASTNodeCStyleLoop(loop as ICStyleLoop, parent, parentField);
      default:
        throw { NodeType: syntax.NodeType(loop) };
    }
  }
}
