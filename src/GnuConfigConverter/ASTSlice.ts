/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTSingle } from "./ASTSingle";
import { logg } from "./logg";
import { I_Slice } from "./ParserTypes";

export class ASTSlice {
  public Offset: ASTNodeArithmExpr; //     Offset: IArithmExpr;
  public Length: ASTNodeArithmExpr; //     Length: IArithmExpr;

  constructor(slice: I_Slice) {
    logg("ASTSlice");
    this.Offset = ASTSingle(ASTNodeArithmExpr, slice.Offset, null)!;
    this.Length = ASTSingle(ASTNodeArithmExpr, slice.Length, null)!;
    [].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
}
