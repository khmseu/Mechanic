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
import { IComment } from "./ParserTypes";

export class ASTNodeComment extends ASTNode {
  public kind: ASTnodeKind.ASTNodeComment = ASTnodeKind.ASTNodeComment;
  public Hash: ASTPos; //     Hash: I_Pos;
  public Text: string; //     Text: string;

  constructor(comment: IComment) {
    super(comment);
    logg("ASTNodeComment");
    const { Hash, Text, ...rest_comment } = comment;
    this.Hash = ASTSimpleSingle(ASTPos, Hash)!;
    this.Text = Text;
    this.rest = rest_comment;
  }
}
