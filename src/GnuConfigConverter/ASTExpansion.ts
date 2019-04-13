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
import { op, Token } from "./Token";

export class ASTExpansion {
  public Op: string; //     Op: ParExpOperator;
  public OpString: string;
  public Word: ASTNodeWord | null; //     Word: IWord | null;

  constructor(expansion: I_Expansion) {
    logg("ASTExpansion");
    this.Op = ParExpOperator[expansion.Op];
    this.OpString = op((expansion.Op as unknown) as Token);
    this.Word = ASTSingle(ASTNodeWord, expansion.Word, null);
    [].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
}
