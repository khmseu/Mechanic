/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { INode } from "./ParserTypes";
export declare class ASTNode {
    kind: ASTnodeKind;
    kindString: string;
    Pos: ASTPos | null;
    End: ASTPos | null;
    constructor(node: INode);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNode.d.ts.map