/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { BinAritOperator, IBinaryArithm } from "./ParserTypes";
export declare class ASTNodeBinaryArithm extends ASTNode {
    kind: ASTnodeKind.ASTNodeBinaryArithm;
    OpPos: ASTPos;
    Op: BinAritOperator;
    X: ASTNodeArithmExpr;
    Y: ASTNodeArithmExpr;
    constructor(binaryarithm: IBinaryArithm);
}
//# sourceMappingURL=ASTNodeBinaryArithm.d.ts.map