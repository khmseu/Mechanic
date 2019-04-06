/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { I_Slice } from "./ParserTypes";
export declare class ASTSlice {
    rest: object | null;
    Offset: ASTNodeArithmExpr;
    Length: ASTNodeArithmExpr;
    constructor(slice: I_Slice);
}
//# sourceMappingURL=ASTSlice.d.ts.map