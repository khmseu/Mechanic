/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "./logg";
import { I_Pos } from "./ParserTypes";

export class ASTPos {
  public rest: object | null;
  // ignored:     After: (p2: I_Pos) => boolean;
  public Col: number; //     Col: () => number;
  public IsValid: boolean; //     IsValid: () => boolean;
  public Line: number; //     Line: () => number;
  public Offset: number; //     Offset: () => number;
  public String: string; //     String: () => string;

  constructor(pos: I_Pos) {
    logg("ASTPos");
    const { Col, IsValid, Line, Offset, String, ...rest_pos } = pos;
    this.Col = Col();
    this.IsValid = IsValid();
    this.Line = Line();
    this.Offset = Offset();
    this.String = String();
    this.rest = rest_pos;
  }
}
