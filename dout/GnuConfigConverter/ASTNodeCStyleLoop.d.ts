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
import { ICStyleLoop } from "./ParserTypes";
export declare class ASTNodeCStyleLoop extends ASTNode {
    kind: ASTnodeKind.ASTNodeCStyleLoop;
    kindString: string;
    Lparen: ASTPos;
    Rparen: ASTPos;
    Init: ASTNodeArithmExpr;
    Cond: ASTNodeArithmExpr;
    Post: ASTNodeArithmExpr;
    constructor(cstyleloop: ICStyleLoop);
}
//# sourceMappingURL=ASTNodeCStyleLoop.d.ts.map