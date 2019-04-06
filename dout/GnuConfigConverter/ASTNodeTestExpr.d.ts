/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ITestExpr } from "./ParserTypes";
export declare class ASTNodeTestExpr extends ASTNode {
    kind: ASTnodeKind.bad | ASTnodeKind.ASTNodeBinaryTest | ASTnodeKind.ASTNodeUnaryTest | ASTnodeKind.ASTNodeParenTest | ASTnodeKind.ASTNodeWord;
    constructor(testexpr: ITestExpr);
}
//# sourceMappingURL=ASTNodeTestExpr.d.ts.map