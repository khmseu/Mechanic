/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { IFuncDecl } from "../ParserTypes";
import { ASTMoreFuncDecl } from "./ASTMoreFuncDecl";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTNodeFuncDecl extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeFuncDecl;
    kindString: string;
    more: ASTMoreFuncDecl;
    Position: ASTPos;
    RsrvWord: boolean;
    Name: ASTNodeLit | null;
    Body: ASTNodeStmt | null;
    constructor(funcdecl: IFuncDecl, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeFuncDecl.d.ts.map