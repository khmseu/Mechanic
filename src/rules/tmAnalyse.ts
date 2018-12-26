/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { TargetSpec } from "./TargetSpec";
import { TargetStringMatcher } from "./TargetStringMatcher";
import { TMAnalysed } from "./TMAnalysed";

/**
 *
 * @export
 * @param  {TargetSpec[]} targets
 * @return TMAnalysed
 */
export function tmAnalyse(targets: TargetSpec[]): TMAnalysed {
  const ret: TMAnalysed = [];
  targets.forEach((target) => {
    if (Array.isArray(target)) {
      const [n, m] = target;
      ret.push({ pathvar: n, matcher: typeof m === "string" ? new TargetStringMatcher(m) : m });
    } else if (typeof target === "string") {
      const m = /^(\w+):(.*)$/.exec(target);
      if (m) {
        ret.push({ pathvar: m[1], matcher: new TargetStringMatcher(m[2]) });
      } else {
        ret.push({ pathvar: "", matcher: new TargetStringMatcher(target) });
      }
    } else {
      ret.push({ pathvar: "", matcher: target });
    }
  });
  return ret;
}
