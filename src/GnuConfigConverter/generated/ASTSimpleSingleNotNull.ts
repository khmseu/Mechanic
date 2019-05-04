/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ok } from "assert";

export function ASTSimpleSingleNotNull<AE, PE>(at: new(pt: PE) => AE, pe: PE | null) {
  ok(pe, "ASTSimpleSingleNotNull");
  const ae = new at(pe!);
  return ae;
}
