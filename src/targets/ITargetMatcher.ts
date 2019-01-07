/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { VarTree } from "../variables/VarTree";
import { ITargetDetails } from "./ITargetDetails";

/**
 * Itarget matcher
 */
export interface ITargetMatcher {
  /**
   *
   * @param full
   * @param parent
   * @param child
   * @returns match
   */
  match(vars: VarTree, full: string, parent: string, child: string): ITargetDetails;
  /**
   *
   * @param vars
   * @returns generate
   */
  generate(vars: VarTree): string;
  /**
   *
   * @returns string
   */
  toString(): string;
}
