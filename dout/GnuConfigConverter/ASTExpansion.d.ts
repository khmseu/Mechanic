/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNodeWord } from "./ASTNodeWord";
import { I_Expansion } from "./ParserTypes";
export declare class ASTExpansion {
    Op: string;
    OpString: string;
    Word: ASTNodeWord | null;
    constructor(expansion: I_Expansion);
}
//# sourceMappingURL=ASTExpansion.d.ts.map