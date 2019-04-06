/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTPos } from "./ASTPos";
import { BinCmdOperator, IBinaryCmd } from "./ParserTypes";
export declare class ASTNodeBinaryCmd extends ASTNode {
    kind: ASTnodeKind.ASTNodeBinaryCmd;
    OpPos: ASTPos;
    Op: BinCmdOperator;
    X: ASTNodeStmt;
    Y: ASTNodeStmt;
    constructor(binarycmd: IBinaryCmd);
}
//# sourceMappingURL=ASTNodeBinaryCmd.d.ts.map