/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreCaseClause } from "./ASTMoreCaseClause";
import { ASTNode } from "./ASTNode";
import { ASTNodeCaseItem } from "./ASTNodeCaseItem";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ICaseClause } from "./ParserTypes";
export declare class ASTNodeCaseClause extends ASTNode {
    kind: ASTnodeKind.ASTNodeCaseClause;
    kindString: string;
    more: ASTMoreCaseClause;
    Case: ASTPos;
    Esac: ASTPos;
    Word: ASTNodeWord | null;
    Items: ASTNodeCaseItem[];
    Last: ASTNodeComment[];
    constructor(caseclause: ICaseClause);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeCaseClause.d.ts.map