/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { DataFromJS } from "../js/DataFromJS";
import { VarTree } from "../variables/VarTree";
import { DependencyList } from "./DependencyList";

/**
 * Idependency generator
 */
export interface IDependencyGenerator {
  /**
   *
   * @param vars
   * @returns generate
   */
  generate(vars: VarTree): DependencyList;
  /**
   *
   * @returns string
   */
  toString(): string;
}
export interface IDependencyGeneratorRaw {
  generate: DataFromJS;
  toString: DataFromJS;
}
