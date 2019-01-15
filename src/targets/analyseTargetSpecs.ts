/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { TargetMatcherList } from "./TargetMatcherList";
import { TargetSpecList } from "./TargetSpecList";
import { TargetStringMatcher } from "./TargetStringMatcher";

/**
 * Analyses target specs
 * @param targets
 * @returns target specs
 */
export function analyseTargetSpecs(targets: TargetSpecList): TargetMatcherList {
  const ret: TargetMatcherList = [];
  if (!targets) {
    return ret;
  }
  targets.forEach((target) => {
    if (typeof target === "string") {
      ret.push(new TargetStringMatcher(target));
    } else {
      ret.push(target);
    }
  });
  return ret;
}
