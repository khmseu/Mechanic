/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ICommand } from "./ParserTypes";
export declare class ASTNodeCommand extends ASTNode {
    kind: ASTnodeKind.bad | ASTnodeKind.ASTNodeCallExpr | ASTnodeKind.ASTNodeIfClause | ASTnodeKind.ASTNodeWhileClause | ASTnodeKind.ASTNodeForClause | ASTnodeKind.ASTNodeCaseClause | ASTnodeKind.ASTNodeBlock | ASTnodeKind.ASTNodeSubshell | ASTnodeKind.ASTNodeBinaryCmd | ASTnodeKind.ASTNodeFuncDecl | ASTnodeKind.ASTNodeArithmCmd | ASTnodeKind.ASTNodeTestClause | ASTnodeKind.ASTNodeDeclClause | ASTnodeKind.ASTNodeLetClause | ASTnodeKind.ASTNodeTimeClause | ASTnodeKind.ASTNodeCoprocClause;
    constructor(command: ICommand);
}
//# sourceMappingURL=ASTNodeCommand.d.ts.map