/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { IFile } from "../ParserTypes";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTNodeFile extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeFile;
    kindString: string;
    Name: string;
    StmtList: ASTNodeStmtList | null;
    Last: ASTNodeComment[];
    constructor(file: IFile, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeFile.d.ts.map