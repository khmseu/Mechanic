/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { I_Replace } from "../ParserTypes";
import { ASTNodeWord } from "./ASTNodeWord";
export declare class ASTReplace {
    All: boolean;
    Orig: ASTNodeWord | null;
    With: ASTNodeWord | null;
    constructor(replace: I_Replace);
}
//# sourceMappingURL=ASTReplace.d.ts.map