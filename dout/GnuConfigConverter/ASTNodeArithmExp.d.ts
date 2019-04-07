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
import { IArithmExp } from "./ParserTypes";
export declare class ASTNodeArithmExp extends ASTNode {
    kind: ASTnodeKind.ASTNodeArithmExp;
    kindString: string;
    Left: ASTPos;
    Right: ASTPos;
    Bracket: boolean;
    Unsigned: boolean;
    X: ASTNodeArithmExpr;
    constructor(arithmexp: IArithmExp);
}
//# sourceMappingURL=ASTNodeArithmExp.d.ts.map