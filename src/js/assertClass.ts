/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ok } from "assert";

/**
 * Asserts class
 * @template C
 * @param theClass
 * @param object
 * @returns class
 */
export function assertClass<C>(theClass: any, object: any): C {
  ok(object instanceof theClass, TypeError("need a " + theClass.name));
  return object;
}
