/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ISyntaxTreeNode } from "./ISyntaxTreeNode";
import { STKind } from "./STKind";
export declare class RestComment implements ISyntaxTreeNode {
    thing: object;
    dflt: string | null;
    kind: STKind.RestComment;
    constructor(thing: object, dflt?: string | null);
    js(): string;
}
//# sourceMappingURL=RestComment.d.ts.map