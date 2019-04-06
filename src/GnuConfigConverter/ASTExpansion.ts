/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNodeWord } from "./ASTNodeWord";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { I_Expansion, ParExpOperator } from "./ParserTypes";

export class ASTExpansion {
  public rest: object | null;
  public Op: ParExpOperator; //     Op: ParExpOperator;
  public Word: ASTNodeWord | null; //     Word: IWord | null;

  constructor(expansion: I_Expansion) {
    logg("ASTExpansion");
    const { Op, Word, ...rest_expansion } = expansion;
    this.Op = Op;
    this.Word = ASTSingle(ASTNodeWord, Word);
    this.rest = rest_expansion;
  }
}
