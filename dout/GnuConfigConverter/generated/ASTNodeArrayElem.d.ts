/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { IArrayElem } from "../ParserTypes";
import { ASTMoreArrayElem } from "./ASTMoreArrayElem";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTNodeArrayElem extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeArrayElem;
    kindString: string;
    more: ASTMoreArrayElem;
    Index: ASTNodeArithmExpr;
    Value: ASTNodeWord | null;
    Comments: ASTNodeComment[];
    constructor(arrayelem: IArrayElem, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeArrayElem.d.ts.map