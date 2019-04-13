/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreLetClause } from "./ASTMoreLetClause";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { ILetClause } from "./ParserTypes";
export declare class ASTNodeLetClause extends ASTNode {
    kind: ASTnodeKind.ASTNodeLetClause;
    kindString: string;
    more: ASTMoreLetClause;
    Let: ASTPos;
    Exprs: ASTNodeArithmExpr[];
    constructor(letclause: ILetClause);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeLetClause.d.ts.map