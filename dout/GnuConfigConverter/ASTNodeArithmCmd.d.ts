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
import { IArithmCmd } from "./ParserTypes";
export declare class ASTNodeArithmCmd extends ASTNode {
    kind: ASTnodeKind.ASTNodeArithmCmd;
    Left: ASTPos;
    Right: ASTPos;
    Unsigned: boolean;
    X: ASTNodeArithmExpr;
    constructor(arithmcmd: IArithmCmd);
}
//# sourceMappingURL=ASTNodeArithmCmd.d.ts.map