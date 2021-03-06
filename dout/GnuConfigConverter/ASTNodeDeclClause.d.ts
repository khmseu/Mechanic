/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreDeclClause } from "./ASTMoreDeclClause";
import { ASTNode } from "./ASTNode";
import { ASTNodeAssign } from "./ASTNodeAssign";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTVisitorBase } from "./ASTVisitorBase";
import { IDeclClause } from "./ParserTypes";
export declare class ASTNodeDeclClause extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeDeclClause;
    kindString: string;
    more: ASTMoreDeclClause;
    Variant: ASTNodeLit | null;
    Opts: ASTNodeWord[];
    Assigns: ASTNodeAssign[];
    constructor(declclause: IDeclClause, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeDeclClause.d.ts.map