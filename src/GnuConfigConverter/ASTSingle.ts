/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./ASTNode";

export function ASTSingle<AE extends ASTNode, PE>(at: new(pt: PE) => AE, pe: PE | null) {
  const ae = pe ? new at(pe) : null;
  return ae;
}
