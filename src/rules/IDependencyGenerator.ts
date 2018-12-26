/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { VarTree } from "./VarTree";
/**
 *
 * @export
 * @interface IDependencyGenerator
 */
export interface IDependencyGenerator {
  /**
   *
   * @param  {VarTree} vars
   * @return string[]
   * @memberof IDependencyGenerator
   */
  generate(vars: VarTree): string[];
  /**
   *
   * @return string
   * @memberof IDependencyGenerator
   */
  toString(): string;
}
