/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTNodeArrayExpr } from "./ASTNodeArrayExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeWord } from "./ASTNodeWord";
import { IAssign } from "./ParserTypes";
export declare class ASTNodeAssign extends ASTNode {
    kind: ASTnodeKind.ASTNodeAssign;
    Append: boolean;
    Naked: boolean;
    Name: ASTNodeLit | null;
    Index: ASTNodeArithmExpr;
    Value: ASTNodeWord | null;
    Array: ASTNodeArrayExpr | null;
    constructor(assign: IAssign);
}
//# sourceMappingURL=ASTNodeAssign.d.ts.map