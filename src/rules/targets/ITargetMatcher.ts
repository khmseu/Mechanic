/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ITargetDetails } from "./ITargetDetails";
import { VarTree } from "../variables/VarTree";

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
  match(full: string, parent: string, child: string): ITargetDetails | null;
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
