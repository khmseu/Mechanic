/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreBraceExp } from "./ASTMoreBraceExp";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { IBraceExp } from "./ParserTypes";
export declare class ASTNodeBraceExp extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeBraceExp;
    kindString: string;
    more: ASTMoreBraceExp;
    Sequence: boolean;
    Chars: boolean;
    Elems: ASTNodeWord[];
    constructor(braceexp: IBraceExp, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeBraceExp.d.ts.map