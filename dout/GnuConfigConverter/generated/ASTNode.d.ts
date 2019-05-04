/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { INode } from "../ParserTypes";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind;
    kindString: string;
    more: {
        [key: string]: any;
    };
    Pos: ASTPos | null;
    End: ASTPos | null;
    constructor(node: INode, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNode.d.ts.map