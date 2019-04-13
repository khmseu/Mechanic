/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreStmt } from "./ASTMoreStmt";
import { ASTNode } from "./ASTNode";
import { ASTNodeCommand } from "./ASTNodeCommand";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeRedirect } from "./ASTNodeRedirect";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IStmt } from "./ParserTypes";
export declare class ASTNodeStmt extends ASTNode {
    kind: ASTnodeKind.ASTNodeStmt;
    kindString: string;
    more: ASTMoreStmt;
    Comments: ASTNodeComment[];
    Cmd: ASTNodeCommand;
    Position: ASTPos;
    Semicolon: ASTPos;
    Negated: boolean;
    Background: boolean;
    Coprocess: boolean;
    Redirs: ASTNodeRedirect[];
    constructor(stmt: IStmt);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeStmt.d.ts.map