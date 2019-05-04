/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { IWordPart } from "../ParserTypes";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
export declare class ASTNodeWordPart extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.bad | ASTnodeKind.ASTNodeLit | ASTnodeKind.ASTNodeSglQuoted | ASTnodeKind.ASTNodeDblQuoted | ASTnodeKind.ASTNodeParamExp | ASTnodeKind.ASTNodeCmdSubst | ASTnodeKind.ASTNodeArithmExp | ASTnodeKind.ASTNodeProcSubst | ASTnodeKind.ASTNodeExtGlob | ASTnodeKind.ASTNodeBraceExp;
    kindString: string;
    constructor(wordpart: IWordPart, parent: ASTNode | null, parentField: string);
}
//# sourceMappingURL=ASTNodeWordPart.d.ts.map