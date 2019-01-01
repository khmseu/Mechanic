/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ok } from "assert";
import { pathSearch } from "../io/pathSearch";
import { string3 } from "../io/string3";
import { PSArray } from "./PSArray";

/**
 * Finds in path
 * @param target
 * @returns in path
 */
export function findInPath(target: string): string3 {
  ok(typeof target === "string", TypeError("parameter must be a string"));
  const found = PSArray.find((cur) => cur[0].test(target));
  ok(found, "Missing catch-all path");
  return pathSearch(found![1], target);
}
