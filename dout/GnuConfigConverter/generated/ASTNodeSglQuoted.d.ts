/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ISglQuoted } from "../ParserTypes";
import { ASTMoreSglQuoted } from "./ASTMoreSglQuoted";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTNodeSglQuoted extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeSglQuoted;
    kindString: string;
    more: ASTMoreSglQuoted;
    Left: ASTPos;
    Right: ASTPos;
    Dollar: boolean;
    Value: string;
    constructor(sglquoted: ISglQuoted, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeSglQuoted.d.ts.map