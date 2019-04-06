/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { IWordPart } from "./ParserTypes";
export declare class ASTNodeWordPart extends ASTNode {
    kind: ASTnodeKind.bad | ASTnodeKind.ASTNodeLit | ASTnodeKind.ASTNodeSglQuoted | ASTnodeKind.ASTNodeDblQuoted | ASTnodeKind.ASTNodeParamExp | ASTnodeKind.ASTNodeCmdSubst | ASTnodeKind.ASTNodeArithmExp | ASTnodeKind.ASTNodeProcSubst | ASTnodeKind.ASTNodeExtGlob | ASTnodeKind.ASTNodeBraceExp;
    constructor(wordpart: IWordPart);
}
//# sourceMappingURL=ASTNodeWordPart.d.ts.map