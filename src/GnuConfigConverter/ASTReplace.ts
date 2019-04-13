/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNodeWord } from "./ASTNodeWord";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { I_Replace } from "./ParserTypes";

export class ASTReplace {
  public All: boolean; //     All: boolean;
  public Orig: ASTNodeWord | null; //     Orig: IWord | null;
  public With: ASTNodeWord | null; //     With: IWord | null;

  constructor(replace: I_Replace) {
    logg("ASTReplace");
    this.All = replace.All;
    this.Orig = ASTSingle(ASTNodeWord, replace.Orig, null);
    this.With = ASTSingle(ASTNodeWord, replace.With, null);
    [].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
}
