/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import { ASTNode } from "./ASTNode";
export declare function ASTArray<AE extends ASTNode, PE>(at: new (pt: PE, parent: ASTNode | null, parentField: string) => AE, pa: PE[] | null, parent: ASTNode | null, parentField: string): AE[];
//# sourceMappingURL=ASTArray.d.ts.map