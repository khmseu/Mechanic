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
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IUnaryArithm } from "./ParserTypes";
export declare class ASTNodeUnaryArithm extends ASTNode {
    kind: ASTnodeKind.ASTNodeUnaryArithm;
    kindString: string;
    more: ASTMoreUnaryArithm;
    OpPos: ASTPos;
    Op: string;
    OpString: string;
    Post: boolean;
    X: ASTNodeArithmExpr;
    constructor(unaryarithm: IUnaryArithm);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeUnaryArithm.d.ts.map