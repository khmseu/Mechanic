/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { existsSync } from "fs";
import { isAbsolute, normalize, parse, resolve } from "path";
import { Path } from "./Path";
import { string3 } from "./string3";

/**
 * Paths search
 * modified from path-search module
 * @param path
 * @param name
 * @returns search
 */
export function pathSearch(path: Path, name: string): string3 {
  const triple = (dir: string): string3 => {
    if (isAbsolute(name)) {
      return [resolve(name), parse(name).root, normalize(name)];
    }
    return [resolve(dir, name), resolve(dir), normalize(name)];
  };
  if (isAbsolute(name)) {
    return triple("");
  }
  for (const dir of path) {
    const candidate = resolve(dir, name);
    if (existsSync(candidate)) {
      return triple(dir);
    }
  }
  return triple(path[0]);
}
