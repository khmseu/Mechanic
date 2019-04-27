/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreDblQuoted } from "./ASTMoreDblQuoted";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWordPart } from "./ASTNodeWordPart";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { IDblQuoted } from "./ParserTypes";
export declare class ASTNodeDblQuoted extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeDblQuoted;
    kindString: string;
    more: ASTMoreDblQuoted;
    Position: ASTPos;
    Dollar: boolean;
    Parts: ASTNodeWordPart[];
    constructor(dblquoted: IDblQuoted, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeDblQuoted.d.ts.map