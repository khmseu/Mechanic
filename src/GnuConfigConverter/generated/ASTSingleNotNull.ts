/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ok } from "assert";
import { ASTNode } from "./ASTNode";

// tslint:disable-next-line:max-line-length
export function ASTSingleNotNull<AE extends ASTNode, PE>(at: new (pt: PE, parent: ASTNode | null, parentField: string) => AE, pe: PE | null, parent: ASTNode | null, parentField: string) {
  ok(pe, parentField);
  const ae = new at(pe!, parent, parentField);
  return ae;
}
