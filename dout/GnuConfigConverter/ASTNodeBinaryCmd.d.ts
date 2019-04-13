/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTMoreBinaryCmd } from "./ASTMoreBinaryCmd";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTnodeVisitor } from "./ASTnodeVisitor";
import { ASTPos } from "./ASTPos";
import { IBinaryCmd } from "./ParserTypes";
export declare class ASTNodeBinaryCmd extends ASTNode {
    kind: ASTnodeKind.ASTNodeBinaryCmd;
    kindString: string;
    more: ASTMoreBinaryCmd;
    OpPos: ASTPos;
    Op: string;
    OpString: string;
    X: ASTNodeStmt;
    Y: ASTNodeStmt;
    constructor(binarycmd: IBinaryCmd);
    accept(visitor: ASTnodeVisitor): void;
}
//# sourceMappingURL=ASTNodeBinaryCmd.d.ts.map