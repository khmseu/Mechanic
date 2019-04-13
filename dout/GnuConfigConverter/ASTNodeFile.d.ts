/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreFile } from "./ASTMoreFile";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { IFile } from "./ParserTypes";
export declare class ASTNodeFile extends ASTNode {
    kind: ASTnodeKind.ASTNodeFile;
    kindString: string;
    more: ASTMoreFile;
    Name: string;
    StmtList: ASTNodeStmtList | null;
    Last: ASTNodeComment[];
    constructor(file: IFile);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeFile.d.ts.map