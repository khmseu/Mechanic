/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ISglQuoted } from "./ParserTypes";
export declare class ASTNodeSglQuoted extends ASTNode {
    kind: ASTnodeKind.ASTNodeSglQuoted;
    Left: ASTPos;
    Right: ASTPos;
    Dollar: boolean;
    Value: string;
    constructor(sglquoted: ISglQuoted);
}
//# sourceMappingURL=ASTNodeSglQuoted.d.ts.map