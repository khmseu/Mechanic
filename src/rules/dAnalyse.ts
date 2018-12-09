/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { isFunction } from "util";
import { DependsGen, DependsSpec } from "./common";

interface IDObject {
  ns?: string;
  name: string|DependsGen;
}
export type DAnalysed = IDObject[];

export function dAnalyse(depends: DependsSpec[]): DAnalysed {
  const ret: DAnalysed = [];
  depends.forEach((depend) => {
    if (Array.isArray(depend)) {
      ret.push({
        ns: depend[0],
        name: depend[1],
      });
    } else if (isFunction(depend)) {
      ret.push({
        name: depend,
      });
    } else if (typeof(depend) === "string") {
      const m = /^(\w+):(.*)$/.exec(depend);
      if (m) {
        ret.push({
          ns: m[1],
          name: m[2],
        });
      } else {
        ret.push({
          name: depend,
        });
      }
    }
  });
  return ret;
  }
