/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ok } from "assert";
import { types } from "util";
import { Path } from "../io/Path";
import { PSArray } from "./PSArray";

/**
 * Sets path
 * @param rex
 * @param path
 */
export function setPath(rex: RegExp, path: Path) {
  ok(types.isRegExp(rex), TypeError("first parameter must be a regular expression"));
  const n = PSArray.reduce((acc, cur, idx) => (cur[0] === rex ? idx : acc), -1);
  if (path === undefined) {
    if (n >= 0) {
      PSArray.slice(n, 1);
    }
  } else {
    ok(Array.isArray(path), TypeError("second parameter must be Path or undefined"));
    ok(path.length > 0, Error("path may not be empty"));
    if (n >= 0) {
      PSArray[n][1] = path;
    } else {
      PSArray.unshift([rex, path]);
    }
  }
}
