/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
import { ASTnodeKind } from "./ASTnodeKind";
import { ILoop } from "./ParserTypes";
export declare class ASTNodeLoop extends ASTNode {
    kind: ASTnodeKind.bad | ASTnodeKind.ASTNodeWordIter | ASTnodeKind.ASTNodeCStyleLoop;
    constructor(loop: ILoop);
}
//# sourceMappingURL=ASTNodeLoop.d.ts.map