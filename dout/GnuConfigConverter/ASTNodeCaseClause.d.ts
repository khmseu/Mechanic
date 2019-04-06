/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTNodeCaseItem } from "./ASTNodeCaseItem";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeWord } from "./ASTNodeWord";
import { ASTPos } from "./ASTPos";
import { ICaseClause } from "./ParserTypes";
export declare class ASTNodeCaseClause extends ASTNode {
    kind: ASTnodeKind.ASTNodeCaseClause;
    Case: ASTPos;
    Esac: ASTPos;
    Word: ASTNodeWord | null;
    Items: ASTNodeCaseItem[];
    Last: ASTNodeComment[];
    constructor(caseclause: ICaseClause);
}
//# sourceMappingURL=ASTNodeCaseClause.d.ts.map