/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTCall } from "./ASTCall";
import { logg } from "./logg";
import { I_Pos } from "./ParserTypes";

export class ASTPos {
  // ignored:     After: ((p2: I_Pos) => boolean) | null;
  public Col: number | null; //     Col: (() => number) | null;
  public IsValid: boolean | null; //     IsValid: (() => boolean) | null;
  public Line: number | null; //     Line: (() => number) | null;
  public Offset: number | null; //     Offset: (() => number) | null;
  public String: string | null; //     String: (() => string) | null;

  constructor(pos: I_Pos) {
    logg("ASTPos");
    this.Col = pos.Col ? ASTCall(pos.Col) : null;
    this.IsValid = pos.IsValid ? ASTCall(pos.IsValid) : null;
    this.Line = pos.Line ? ASTCall(pos.Line) : null;
    this.Offset = pos.Offset ? ASTCall(pos.Offset) : null;
    this.String = pos.String ? ASTCall(pos.String) : null;
    [].forEach((f) => {
      const desc: PropertyDescriptor = Object.getOwnPropertyDescriptor(this, f)!;
      desc.enumerable = false;
      Object.defineProperty(this, f, desc);
    });
  }
}
