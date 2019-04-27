/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreArrayExpr } from "./ASTMoreArrayExpr";
import { ASTNode } from "./ASTNode";
import { ASTNodeArrayElem } from "./ASTNodeArrayElem";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { IArrayExpr } from "./ParserTypes";
export declare class ASTNodeArrayExpr extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeArrayExpr;
    kindString: string;
    more: ASTMoreArrayExpr;
    Lparen: ASTPos;
    Rparen: ASTPos;
    Elems: ASTNodeArrayElem[];
    Last: ASTNodeComment[];
    constructor(arrayexpr: IArrayExpr, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeArrayExpr.d.ts.map