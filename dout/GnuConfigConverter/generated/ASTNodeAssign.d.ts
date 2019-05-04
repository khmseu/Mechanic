/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { IAssign } from "../ParserTypes";
import { ASTMoreAssign } from "./ASTMoreAssign";
import { ASTNode } from "./ASTNode";
import { ASTNodeArithmExpr } from "./ASTNodeArithmExpr";
import { ASTNodeArrayExpr } from "./ASTNodeArrayExpr";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTNodeAssign extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeAssign;
    kindString: string;
    more: ASTMoreAssign;
    Append: boolean;
    Naked: boolean;
    Name: ASTNodeLit | null;
    Index: ASTNodeArithmExpr | null;
    Value: ASTNodeWord | null;
    Array: ASTNodeArrayExpr | null;
    constructor(assign: IAssign, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeAssign.d.ts.map