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
  public rest: object | null;
  public All: boolean; //     All: boolean;
  public Orig: ASTNodeWord | null; //     Orig: IWord | null;
  public With: ASTNodeWord | null; //     With: IWord | null;

  constructor(replace: I_Replace) {
    logg("ASTReplace");
    const { All, Orig, With, ...rest_replace } = replace;
    this.All = All;
    this.Orig = ASTSingle(ASTNodeWord, Orig);
    this.With = ASTSingle(ASTNodeWord, With);
    this.rest = rest_replace;
  }
}
