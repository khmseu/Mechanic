/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "../logg";
import { I_Slice } from "../ParserTypes";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTSingleNotNull } from "./ASTSingleNotNull";

export class ASTSlice {
  public Offset: ASTNodeArithmExpr; //     Offset: IArithmExpr;
  public Length: ASTNodeArithmExpr; //     Length: IArithmExpr;

  constructor(slice: I_Slice) {
    logg("ASTSlice");
    this.Offset = ASTSingleNotNull(ASTNodeArithmExpr, slice.Offset, null, "Offset");
    this.Length = ASTSingleNotNull(ASTNodeArithmExpr, slice.Length, null, "Length");
    [].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
}
