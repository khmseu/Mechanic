/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTNodeAssign } from "./ASTNodeAssign";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { ICallExpr } from "./ParserTypes";
export declare class ASTNodeCallExpr extends ASTNode {
    kind: ASTnodeKind.ASTNodeCallExpr;
    Assigns: ASTNodeAssign[];
    Args: ASTNodeWord[];
    constructor(callexpr: ICallExpr);
}
//# sourceMappingURL=ASTNodeCallExpr.d.ts.map