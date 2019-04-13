/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreBlock } from "./ASTMoreBlock";
import { ASTNode } from "./ASTNode";
import { ASTNodeComment } from "./ASTNodeComment";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmtList } from "./ASTNodeStmtList";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IBlock } from "./ParserTypes";
export declare class ASTNodeBlock extends ASTNode {
    kind: ASTnodeKind.ASTNodeBlock;
    kindString: string;
    more: ASTMoreBlock;
    Lbrace: ASTPos;
    Rbrace: ASTPos;
    StmtList: ASTNodeStmtList | null;
    Last: ASTNodeComment[];
    constructor(block: IBlock);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeBlock.d.ts.map