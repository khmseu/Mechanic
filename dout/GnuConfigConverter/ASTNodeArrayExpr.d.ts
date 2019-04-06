/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTNodeArrayElem } from "./ASTNodeArrayElem";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { IArrayExpr } from "./ParserTypes";
export declare class ASTNodeArrayExpr extends ASTNode {
    kind: ASTnodeKind.ASTNodeArrayExpr;
    Lparen: ASTPos;
    Rparen: ASTPos;
    Elems: ASTNodeArrayElem[];
    Last: ASTNodeComment[];
    constructor(arrayexpr: IArrayExpr);
}
//# sourceMappingURL=ASTNodeArrayExpr.d.ts.map