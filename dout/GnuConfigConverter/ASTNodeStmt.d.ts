/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTNodeCommand } from "./ASTNodeCommand";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeRedirect } from "./ASTNodeRedirect";
import { ASTPos } from "./ASTPos";
import { IStmt } from "./ParserTypes";
export declare class ASTNodeStmt extends ASTNode {
    kind: ASTnodeKind.ASTNodeStmt;
    kindString: string;
    Comments: ASTNodeComment[];
    Cmd: ASTNodeCommand;
    Position: ASTPos;
    Semicolon: ASTPos;
    Negated: boolean;
    Background: boolean;
    Coprocess: boolean;
    Redirs: ASTNodeRedirect[];
    constructor(stmt: IStmt);
}
//# sourceMappingURL=ASTNodeStmt.d.ts.map