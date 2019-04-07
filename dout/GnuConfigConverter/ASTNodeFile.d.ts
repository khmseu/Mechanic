/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { IFile } from "./ParserTypes";
export declare class ASTNodeFile extends ASTNode {
    kind: ASTnodeKind.ASTNodeFile;
    kindString: string;
    Name: string;
    StmtList: ASTNodeStmtList | null;
    Last: ASTNodeComment[];
    constructor(file: IFile);
}
//# sourceMappingURL=ASTNodeFile.d.ts.map