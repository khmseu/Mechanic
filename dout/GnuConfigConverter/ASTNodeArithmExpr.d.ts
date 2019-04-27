/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { IArithmExpr } from "./ParserTypes";
export declare class ASTNodeArithmExpr extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.bad | ASTnodeKind.ASTNodeBinaryArithm | ASTnodeKind.ASTNodeUnaryArithm | ASTnodeKind.ASTNodeParenArithm | ASTnodeKind.ASTNodeWord;
    kindString: string;
    constructor(arithmexpr: IArithmExpr, parent: ASTNode | null, parentField: string);
}
//# sourceMappingURL=ASTNodeArithmExpr.d.ts.map