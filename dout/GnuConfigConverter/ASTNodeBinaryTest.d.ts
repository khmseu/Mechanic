/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeTestExpr } from "./ASTNodeTestExpr";
import { ASTPos } from "./ASTPos";
import { BinTestOperator, IBinaryTest } from "./ParserTypes";
export declare class ASTNodeBinaryTest extends ASTNode {
    kind: ASTnodeKind.ASTNodeBinaryTest;
    OpPos: ASTPos;
    Op: BinTestOperator;
    X: ASTNodeTestExpr;
    Y: ASTNodeTestExpr;
    constructor(binarytest: IBinaryTest);
}
//# sourceMappingURL=ASTNodeBinaryTest.d.ts.map