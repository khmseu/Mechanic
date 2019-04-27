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
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { IArithmExp } from "./ParserTypes";
export declare class ASTNodeArithmExp extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeArithmExp;
    kindString: string;
    more: ASTMoreArithmExp;
    Left: ASTPos;
    Right: ASTPos;
    Bracket: boolean;
    Unsigned: boolean;
    X: ASTNodeArithmExpr;
    constructor(arithmexp: IArithmExp, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeArithmExp.d.ts.map