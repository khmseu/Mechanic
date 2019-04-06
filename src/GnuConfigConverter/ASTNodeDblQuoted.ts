/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWordPart } from "./ASTNodeWordPart";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { logg } from "./logg";
import { IDblQuoted } from "./ParserTypes";

export class ASTNodeDblQuoted extends ASTNode {
  public kind: ASTnodeKind.ASTNodeDblQuoted = ASTnodeKind.ASTNodeDblQuoted;
  public Position: ASTPos; //     Position: I_Pos;
  public Dollar: boolean; //     Dollar: boolean;
  public Parts: ASTNodeWordPart[]; //     Parts: IWordPart[];

  constructor(dblquoted: IDblQuoted) {
    super(dblquoted);
    logg("ASTNodeDblQuoted");
    const { Position, Dollar, Parts, ...rest_dblquoted } = dblquoted;
    this.Position = ASTSimpleSingle(ASTPos, Position)!;
    this.Dollar = Dollar;
    this.Parts = ASTArray(ASTNodeWordPart, Parts)!;
    this.rest = rest_dblquoted;
  }
}
