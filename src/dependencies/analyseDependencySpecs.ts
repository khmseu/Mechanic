/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { DependencyGeneratorList } from "./DependencyGeneratorList";
import { DependencySpecList } from "./DependencySpecList";
import { DependencyStringGenerator } from "./DependencyStringGenerator";

/**
 * Analyses dependency spec
 * @param depends
 * @returns dependency spec
 */
export function analyseDependencySpecs(depends: DependencySpecList): DependencyGeneratorList {
  const ret: DependencyGeneratorList = [];
  depends.forEach((depend) => {
    if (typeof depend === "string") {
      ret.push({ generator: new DependencyStringGenerator(depend) });
    } else {
      ret.push({ generator: depend });
    }
  });
  return ret;
}
