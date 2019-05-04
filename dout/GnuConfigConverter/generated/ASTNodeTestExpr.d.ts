/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ITestExpr } from "../ParserTypes";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
export declare class ASTNodeTestExpr extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.bad | ASTnodeKind.ASTNodeBinaryTest | ASTnodeKind.ASTNodeUnaryTest | ASTnodeKind.ASTNodeParenTest | ASTnodeKind.ASTNodeWord;
    kindString: string;
    constructor(testexpr: ITestExpr, parent: ASTNode | null, parentField: string);
}
//# sourceMappingURL=ASTNodeTestExpr.d.ts.map