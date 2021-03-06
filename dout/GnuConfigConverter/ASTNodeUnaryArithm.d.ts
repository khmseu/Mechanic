/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreUnaryArithm } from "./ASTMoreUnaryArithm";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { IUnaryArithm } from "./ParserTypes";
export declare class ASTNodeUnaryArithm extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeUnaryArithm;
    kindString: string;
    more: ASTMoreUnaryArithm;
    OpPos: ASTPos;
    Op: string;
    OpString: string;
    Post: boolean;
    X: ASTNodeArithmExpr;
    constructor(unaryarithm: IUnaryArithm, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeUnaryArithm.d.ts.map