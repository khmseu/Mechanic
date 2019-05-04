/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { IRedirect } from "../ParserTypes";
import { ASTMoreRedirect } from "./ASTMoreRedirect";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTNodeRedirect extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeRedirect;
    kindString: string;
    more: ASTMoreRedirect;
    OpPos: ASTPos;
    Op: string;
    OpString: string;
    N: ASTNodeLit | null;
    Word: ASTNodeWord | null;
    Hdoc: ASTNodeWord | null;
    constructor(redirect: IRedirect, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeRedirect.d.ts.map