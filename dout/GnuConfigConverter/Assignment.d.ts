/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ISyntaxTreeNode } from "./ISyntaxTreeNode";
import { STKind } from "./STKind";
export declare class Assignment implements ISyntaxTreeNode {
    Name: string;
    Value: string;
    kind: STKind.Assignment;
    constructor(Name: string, Value: string);
    js(): string;
}
//# sourceMappingURL=Assignment.d.ts.map