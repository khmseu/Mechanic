/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ok } from "assert";
import { VarTree } from "./VarTree";

export function getNS(vt: VarTree, ns: string) {
  const vn = vt[ns ? ns : "DEFAULT"];
  ok(vn, "No such namespace " + ns);
  return vn;
}
