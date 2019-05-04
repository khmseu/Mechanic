/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { I_Pos } from "../ParserTypes";
export declare class ASTPos {
    Col: number | null;
    IsValid: boolean | null;
    Line: number | null;
    Offset: number | null;
    String: string | null;
    constructor(pos: I_Pos);
}
//# sourceMappingURL=ASTPos.d.ts.map