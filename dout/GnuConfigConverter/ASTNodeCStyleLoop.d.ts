/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreCStyleLoop } from "./ASTMoreCStyleLoop";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ICStyleLoop } from "./ParserTypes";
export declare class ASTNodeCStyleLoop extends ASTNode {
    kind: ASTnodeKind.ASTNodeCStyleLoop;
    kindString: string;
    more: ASTMoreCStyleLoop;
    Lparen: ASTPos;
    Rparen: ASTPos;
    Init: ASTNodeArithmExpr;
    Cond: ASTNodeArithmExpr;
    Post: ASTNodeArithmExpr;
    constructor(cstyleloop: ICStyleLoop);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeCStyleLoop.d.ts.map