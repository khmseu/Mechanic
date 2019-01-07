/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ok } from "assert";
import { existsSync } from "fs";
import { isAbsolute, normalize, parse, resolve } from "path";
import { Path } from "./Path";
import { PathDescriptorTriple } from "./PathDescriptorTriple";

/**
 * Paths search
 * modified from path-search module
 * @param path
 * @param name
 * @returns search
 */
export function pathSearch(path: Path, name: string): PathDescriptorTriple {
  ok(path.length > 0, "path may not be empty");
  const nn = normalize(name);
  if (isAbsolute(name)) {
    const rn = resolve(name);
    return [rn, parse(rn).root, nn];
  }
  let c0;
  let d0;
  // tslint:disable-next-line:no-shadowed-variable
  for (const dir of path) {
    const candidate = resolve(dir, name);
    if (existsSync(candidate)) {
      return [candidate, resolve(dir), nn];
    }
    if (!c0 && !d0) {
      c0 = candidate;
      d0 = dir;
    }
  }
  return [c0!, resolve(d0!), nn];
}
