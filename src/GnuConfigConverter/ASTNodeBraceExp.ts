/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTArray } from "./ASTArray";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { logg } from "./logg";
import { IBraceExp } from "./ParserTypes";

export class ASTNodeBraceExp extends ASTNode {
  public kind: ASTnodeKind.ASTNodeBraceExp = ASTnodeKind.ASTNodeBraceExp;
  public Sequence: boolean; //     Sequence: boolean;
  public Chars: boolean; //     Chars: boolean;
  public Elems: ASTNodeWord[]; //     Elems: IWord[] | null;

  constructor(braceexp: IBraceExp) {
    super(braceexp);
    logg("ASTNodeBraceExp");
    const { Sequence, Chars, Elems, ...rest_braceexp } = braceexp;
    this.Sequence = Sequence;
    this.Chars = Chars;
    this.Elems = ASTArray(ASTNodeWord, Elems);
    this.rest = rest_braceexp;
  }
}
