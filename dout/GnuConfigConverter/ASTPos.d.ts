/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { I_Pos } from "./ParserTypes";
export declare class ASTPos {
    rest: object | null;
    Col: number;
    IsValid: boolean;
    Line: number;
    Offset: number;
    String: string;
    constructor(pos: I_Pos);
}
//# sourceMappingURL=ASTPos.d.ts.map