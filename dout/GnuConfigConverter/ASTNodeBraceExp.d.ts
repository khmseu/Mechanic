/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { IBraceExp } from "./ParserTypes";
export declare class ASTNodeBraceExp extends ASTNode {
    kind: ASTnodeKind.ASTNodeBraceExp;
    kindString: string;
    Sequence: boolean;
    Chars: boolean;
    Elems: ASTNodeWord[];
    constructor(braceexp: IBraceExp);
}
//# sourceMappingURL=ASTNodeBraceExp.d.ts.map