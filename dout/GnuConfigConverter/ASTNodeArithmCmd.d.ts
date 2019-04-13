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
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IArithmCmd } from "./ParserTypes";
export declare class ASTNodeArithmCmd extends ASTNode {
    kind: ASTnodeKind.ASTNodeArithmCmd;
    kindString: string;
    more: ASTMoreArithmCmd;
    Left: ASTPos;
    Right: ASTPos;
    Unsigned: boolean;
    X: ASTNodeArithmExpr;
    constructor(arithmcmd: IArithmCmd);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeArithmCmd.d.ts.map