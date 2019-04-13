/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreBinaryArithm } from "./ASTMoreBinaryArithm";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IBinaryArithm } from "./ParserTypes";
export declare class ASTNodeBinaryArithm extends ASTNode {
    kind: ASTnodeKind.ASTNodeBinaryArithm;
    kindString: string;
    more: ASTMoreBinaryArithm;
    OpPos: ASTPos;
    Op: string;
    OpString: string;
    X: ASTNodeArithmExpr;
    Y: ASTNodeArithmExpr;
    constructor(binaryarithm: IBinaryArithm);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeBinaryArithm.d.ts.map