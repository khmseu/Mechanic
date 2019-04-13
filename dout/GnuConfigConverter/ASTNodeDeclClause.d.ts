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
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTNodeWord } from "./ASTNodeWord";
import { IDeclClause } from "./ParserTypes";
export declare class ASTNodeDeclClause extends ASTNode {
    kind: ASTnodeKind.ASTNodeDeclClause;
    kindString: string;
    more: ASTMoreDeclClause;
    Variant: ASTNodeLit | null;
    Opts: ASTNodeWord[];
    Assigns: ASTNodeAssign[];
    constructor(declclause: IDeclClause);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeDeclClause.d.ts.map