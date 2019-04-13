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
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IArrayExpr } from "./ParserTypes";
export declare class ASTNodeArrayExpr extends ASTNode {
    kind: ASTnodeKind.ASTNodeArrayExpr;
    kindString: string;
    more: ASTMoreArrayExpr;
    Lparen: ASTPos;
    Rparen: ASTPos;
    Elems: ASTNodeArrayElem[];
    Last: ASTNodeComment[];
    constructor(arrayexpr: IArrayExpr);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeArrayExpr.d.ts.map