/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ok } from "assert";
import { PathDescriptorTriple } from "../io/PathDescriptorTriple";
import { pathSearch } from "../io/pathSearch";
import { PSArray } from "./PSArray";

/**
 * Finds in path
 * @param target
 * @returns in path
 */
export function findInPath(target: string): PathDescriptorTriple {
  const found = PSArray.find((cur) => cur[0].test(target));
  ok(found, "Missing catch-all path: did not match " + target);
  return pathSearch(found![1], target);
}
