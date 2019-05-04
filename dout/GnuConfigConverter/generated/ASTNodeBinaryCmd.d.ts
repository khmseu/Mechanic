/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { IBinaryCmd } from "../ParserTypes";
import { ASTMoreBinaryCmd } from "./ASTMoreBinaryCmd";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ASTNodeStmt } from "./ASTNodeStmt";
import { ASTPos } from "./ASTPos";
import { ASTVisitorBase } from "./ASTVisitorBase";
export declare class ASTNodeBinaryCmd extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.ASTNodeBinaryCmd;
    kindString: string;
    more: ASTMoreBinaryCmd;
    OpPos: ASTPos;
    Op: string;
    OpString: string;
    X: ASTNodeStmt;
    Y: ASTNodeStmt;
    constructor(binarycmd: IBinaryCmd, parent: ASTNode | null, parentField: string);
    accept(visitor: ASTVisitorBase): void;
}
//# sourceMappingURL=ASTNodeBinaryCmd.d.ts.map