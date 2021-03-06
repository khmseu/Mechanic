/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreArithmCmd } from "./ASTMoreArithmCmd";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { IArithmCmd } from "./ParserTypes";
export declare class ASTNodeArithmCmd extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeArithmCmd;
    kindString: string;
    more: ASTMoreArithmCmd;
    Left: ASTPos;
    Right: ASTPos;
    Unsigned: boolean;
    X: ASTNodeArithmExpr;
    constructor(arithmcmd: IArithmCmd, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeArithmCmd.d.ts.map