/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./ASTNode";
import { ASTSingle } from "./ASTSingle";

export function ASTArray<AE extends ASTNode, PE>(at: new(pt: PE) => AE, pa: PE[] | null) {
  const aa: AE[] = [];
  if (pa) {
    pa.forEach((pe) => {
        const ae = ASTSingle<AE, PE>(at, pe);
        if (ae) {
          aa.push(ae);
        }
    });
  }
  return aa;
}
