/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreFuncDecl } from "./ASTMoreFuncDecl";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeLit } from "./ASTNodeLit";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IFuncDecl } from "./ParserTypes";
export declare class ASTNodeFuncDecl extends ASTNode {
    kind: ASTnodeKind.ASTNodeFuncDecl;
    kindString: string;
    more: ASTMoreFuncDecl;
    Position: ASTPos;
    RsrvWord: boolean;
    Name: ASTNodeLit | null;
    Body: ASTNodeStmt | null;
    constructor(funcdecl: IFuncDecl);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeFuncDecl.d.ts.map