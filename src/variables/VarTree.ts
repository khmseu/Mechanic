/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { VarNameSpace } from "./VarNameSpace";

/**
 * Var tree
 */
export class VarTree {
  [ns: string]: VarNameSpace | null | undefined | typeof process.env;
  constructor() {
    const v: VarTree = {};
    v.ENV = process.env;
  }
}
