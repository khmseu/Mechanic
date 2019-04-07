/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTPos } from "./ASTPos";
import { IExtGlob } from "./ParserTypes";
export declare class ASTNodeExtGlob extends ASTNode {
    kind: ASTnodeKind.ASTNodeExtGlob;
    kindString: string;
    OpPos: ASTPos;
    Op: string;
    OpString: string;
    Pattern: ASTNodeLit | null;
    constructor(extglob: IExtGlob);
}
//# sourceMappingURL=ASTNodeExtGlob.d.ts.map