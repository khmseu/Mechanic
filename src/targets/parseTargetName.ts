/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { testVar } from "../variables/patterns";
import { VarSet } from "../variables/VarSet";
import { IParsedTargetName } from "./IParsedTargetName";

const rexTestNameIsVar = new RegExp(`^#(${testVar})$`);
const rexSplitVar = new RegExp(`(%|${testVar})`);
/**
 * Parses target name
 *
 * @param targetName
 * Names consist of literal text interspersed with special sequences
 * - `%` is a wildcard
 * - `${ns:name}` is a variable to interpolate
 * - `${name}` is the same in a default namespace
 * - or the whole string could match `#${ns:name}` or `#${name}` which means the variable itself
 *
 * `ns` and `name` must match `\p{IDS}\p{IDC}*`, unless in the default namespace when `name` can also match `^\d+$`
 *
 * Names matching `\p{Upper}+` are reserved
 *
 * @returns
 */
export function parseTargetName(targetName: string): IParsedTargetName {
  const res = rexTestNameIsVar.exec(targetName);
  if (res) {
    return { vars: new VarSet(res[0]), split: [], parts: [] };
  }
  const raw = targetName.split(rexSplitVar);
  const parts: string[] = [];
  let rs: string[] = [];
  const vars = new VarSet();
  let n = 1;
  const split: string[] = [];
  raw.forEach((v) => {
    if (v === "%") {
      rs.push("(.*)");
      split.push(`\${${n++}}`);
    } else if (/^\$/.test(v)) {
      vars.add(v);
      const rsj = rs.join("");
      if (rsj.length) {
        parts.push(rsj);
      }
      rs = [];
      parts.push(v);
      split.push(v);
    } else if (v.length) {
      rs.push(
        [...v]
          .map((c: string) => {
            c.replace(/\W/, "\\$&");
          })
          .join(""),
      );
      split.push(v);
    }
  });
  const lastrsj = rs.join("");
  if (lastrsj.length) {
    parts.push(lastrsj);
  }
  return { vars, split, parts };
}
