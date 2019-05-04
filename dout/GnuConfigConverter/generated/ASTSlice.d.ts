/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { I_Slice } from "../ParserTypes";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
export declare class ASTSlice {
    Offset: ASTNodeArithmExpr;
    Length: ASTNodeArithmExpr;
    constructor(slice: I_Slice);
}
//# sourceMappingURL=ASTSlice.d.ts.map