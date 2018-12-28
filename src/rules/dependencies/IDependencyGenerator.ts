/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { VarTree } from "../variables/VarTree";

/**
 * Idependency generator
 */
export interface IDependencyGenerator {
  /**
   *
   * @param vars
   * @returns generate
   */
  generate(vars: VarTree): string[];
  /**
   *
   * @returns string
   */
  toString(): string;
}
