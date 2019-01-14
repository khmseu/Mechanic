/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ok } from "assert";
import { getNS } from "./getNS";
import { rexParseAsVar } from "./patterns";
import { VarTree } from "./VarTree";
import { VarValue } from "./VarValue";

export function setVar(vt: VarTree, varName: string, varValue: VarValue): void {
  ok(vt, "missing VarTree");
  const r = rexParseAsVar.exec(varName);
  ok(r, "not a valid var name " + varName);
  const [ns, name] = r!;
  const vn = getNS(vt, ns);
  vn![name] = varValue;
}
