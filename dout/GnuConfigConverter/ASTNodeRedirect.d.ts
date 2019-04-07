/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { IRedirect } from "./ParserTypes";
export declare class ASTNodeRedirect extends ASTNode {
    kind: ASTnodeKind.ASTNodeRedirect;
    kindString: string;
    OpPos: ASTPos;
    Op: string;
    OpString: string;
    N: ASTNodeLit | null;
    Word: ASTNodeWord | null;
    Hdoc: ASTNodeWord | null;
    constructor(redirect: IRedirect);
}
//# sourceMappingURL=ASTNodeRedirect.d.ts.map