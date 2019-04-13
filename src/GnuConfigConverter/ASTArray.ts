/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ASTNode } from "./ASTNode";
import { ASTSingle } from "./ASTSingle";

// tslint:disable-next-line:max-line-length
export function ASTArray<AE extends ASTNode, PE>(at: new(pt: PE, parent: ASTNode | null) => AE, pa: PE[] | null, parent: ASTNode | null) {
  const aa: AE[] = [];
  if (pa) {
    pa.forEach((pe) => {
        const ae = ASTSingle<AE, PE>(at, pe, parent);
        if (ae) {
          aa.push(ae);
        }
    });
  }
  return aa;
}
