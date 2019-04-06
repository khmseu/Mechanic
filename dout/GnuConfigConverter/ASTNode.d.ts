/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { INode } from "./ParserTypes";
export declare class ASTNode {
    kind: ASTnodeKind;
    rest: object | null;
    Pos: ASTPos;
    End: ASTPos;
    constructor(node: INode);
}
//# sourceMappingURL=ASTNode.d.ts.map