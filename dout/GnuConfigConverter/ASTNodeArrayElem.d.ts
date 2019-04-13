/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreArrayElem } from "./ASTMoreArrayElem";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTNodeWord } from "./ASTNodeWord";
import { IArrayElem } from "./ParserTypes";
export declare class ASTNodeArrayElem extends ASTNode {
    kind: ASTnodeKind.ASTNodeArrayElem;
    kindString: string;
    more: ASTMoreArrayElem;
    Index: ASTNodeArithmExpr;
    Value: ASTNodeWord | null;
    Comments: ASTNodeComment[];
    constructor(arrayelem: IArrayElem);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeArrayElem.d.ts.map