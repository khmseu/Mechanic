/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ILoop } from "../ParserTypes";
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
export declare class ASTNodeLoop extends ASTNode {
    parent: ASTNode | null;
    parentField: string;
    kind: ASTnodeKind.bad | ASTnodeKind.ASTNodeWordIter | ASTnodeKind.ASTNodeCStyleLoop;
    kindString: string;
    constructor(loop: ILoop, parent: ASTNode | null, parentField: string);
}
//# sourceMappingURL=ASTNodeLoop.d.ts.map