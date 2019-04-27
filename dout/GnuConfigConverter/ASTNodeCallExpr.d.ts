/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreCallExpr } from "./ASTMoreCallExpr";
import { ASTNode } from "./ASTNode";
import { ASTNodeAssign } from "./ASTNodeAssign";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { ICallExpr } from "./ParserTypes";
export declare class ASTNodeCallExpr extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeCallExpr;
    kindString: string;
    more: ASTMoreCallExpr;
    Assigns: ASTNodeAssign[];
    Args: ASTNodeWord[];
    constructor(callexpr: ICallExpr, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeCallExpr.d.ts.map