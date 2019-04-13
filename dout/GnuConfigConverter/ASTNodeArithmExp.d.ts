/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreArithmExp } from "./ASTMoreArithmExp";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IArithmExp } from "./ParserTypes";
export declare class ASTNodeArithmExp extends ASTNode {
    kind: ASTnodeKind.ASTNodeArithmExp;
    kindString: string;
    more: ASTMoreArithmExp;
    Left: ASTPos;
    Right: ASTPos;
    Bracket: boolean;
    Unsigned: boolean;
    X: ASTNodeArithmExpr;
    constructor(arithmexp: IArithmExp);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeArithmExp.d.ts.map