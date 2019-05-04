/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { IArrayExpr } from "../ParserTypes";
import { ASTNode } from "./ASTNode";
import { ASTNodeArrayElem } from "./ASTNodeArrayElem";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTNodeArrayExpr extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeArrayExpr;
    kindString: string;
    Lparen: ASTPos;
    Rparen: ASTPos;
    Elems: ASTNodeArrayElem[];
    Last: ASTNodeComment[];
    constructor(arrayexpr: IArrayExpr, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeArrayExpr.d.ts.map