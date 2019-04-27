/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreWordIter } from "./ASTMoreWordIter";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { IWordIter } from "./ParserTypes";
export declare class ASTNodeWordIter extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeWordIter;
    kindString: string;
    more: ASTMoreWordIter;
    Name: ASTNodeLit | null;
    InPos: ASTPos;
    Items: ASTNodeWord[];
    constructor(worditer: IWordIter, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeWordIter.d.ts.map