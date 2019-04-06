/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTSimpleSingle } from "./ASTSimpleSingle";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { IWordIter } from "./ParserTypes";

export class ASTNodeWordIter extends ASTNode {
  public kind: ASTnodeKind.ASTNodeWordIter = ASTnodeKind.ASTNodeWordIter;
  public Name: ASTNodeLit | null; //     Name: ILit | null;
  public InPos: ASTPos; //     InPos: I_Pos;
  public Items: ASTNodeWord[]; //     Items: IWord[] | null;

  constructor(worditer: IWordIter) {
    super(worditer);
    logg("ASTNodeWordIter");
    const { Name, InPos, Items, ...rest_worditer } = worditer;
    this.Name = ASTSingle(ASTNodeLit, Name);
    this.InPos = ASTSimpleSingle(ASTPos, InPos)!;
    this.Items = ASTArray(ASTNodeWord, Items);
    this.rest = rest_worditer;
  }
}
