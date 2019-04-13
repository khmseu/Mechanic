/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreLit } from "./ASTMoreLit";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ILit } from "./ParserTypes";
export declare class ASTNodeLit extends ASTNode {
    kind: ASTnodeKind.ASTNodeLit;
    kindString: string;
    more: ASTMoreLit;
    ValuePos: ASTPos;
    ValueEnd: ASTPos;
    Value: string;
    constructor(lit: ILit);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeLit.d.ts.map