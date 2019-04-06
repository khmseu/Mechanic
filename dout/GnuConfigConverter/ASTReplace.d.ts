/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNodeWord } from "./ASTNodeWord";
import { I_Replace } from "./ParserTypes";
export declare class ASTReplace {
    rest: object | null;
    All: boolean;
    Orig: ASTNodeWord | null;
    With: ASTNodeWord | null;
    constructor(replace: I_Replace);
}
//# sourceMappingURL=ASTReplace.d.ts.map