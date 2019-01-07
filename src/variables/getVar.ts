/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ok } from "assert";
import { CurrentVarValue } from "./CurrentVarValue";
import { parseVar } from "./patterns";
import { VarTree } from "./VarTree";
import { VarValue } from "./VarValue";

const rexParseAsVar = new RegExp(`^${parseVar}$`);
/**
 * Gets var
 * @param vt
 * @param varName
 * @returns var
 */
export function getVar(vt: VarTree, varName: string): CurrentVarValue {
  ok(vt, "missing VarTree");
  const r = rexParseAsVar.exec(varName);
  ok(r, "not a valid var name " + varName);
  const [ns, name] = r!;
  const vn = vt[ns ? ns : "DEFAULT"];
  ok(vn, "No such namespace " + ns);
  let vv: VarValue = vn![name];
  if (!vv) {
    return vv;
  }
  if (typeof vv === "object") {
    vv = vv.toString();
  }
  ok(!vv || typeof vv === "string", "cannot convert var to string " + varName);
  return vv as CurrentVarValue;
}