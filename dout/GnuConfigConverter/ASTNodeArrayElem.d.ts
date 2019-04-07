/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { IArrayElem } from "./ParserTypes";
export declare class ASTNodeArrayElem extends ASTNode {
    kind: ASTnodeKind.ASTNodeArrayElem;
    kindString: string;
    Index: ASTNodeArithmExpr;
    Value: ASTNodeWord | null;
    Comments: ASTNodeComment[];
    constructor(arrayelem: IArrayElem);
}
//# sourceMappingURL=ASTNodeArrayElem.d.ts.map