/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { DAnalysed } from "./DAnalysed";
import { DependencySpec } from "./DependencySpec";
import { DependencyStringMatcher } from "./DependencyStringMatcher";

/**
 * Determines whether analyse d
 * @param depends
 * @returns analyse
 */
export function dAnalyse(depends: DependencySpec[]): DAnalysed {
  const ret: DAnalysed = [];
  depends.forEach((depend) => {
    if (typeof depend === "string") {
      ret.push({ generator: new DependencyStringMatcher(depend) });
    } else {
      ret.push({ generator: depend });
    }
  });
  return ret;
}
