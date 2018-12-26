/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ITargetDetails } from "./ITargetDetails";
import { VarTree } from "./VarTree";

/**
 *
 * @export
 * @interface ITargetMatcher
 */
export interface ITargetMatcher {
  /**
   *
   * @param  {string} full
   * @param  {string} parent
   * @param  {string} child
   * @return (ITargetDetails | null)
   * @memberof ITargetMatcher
   */
  match(full: string, parent: string, child: string): ITargetDetails | null;
  /**
   *
   * @param  {VarTree} vars
   * @return string
   * @memberof ITargetMatcher
   */
  generate(vars: VarTree): string;
  /**
   *
   * @return string
   * @memberof ITargetMatcher
   */
  toString(): string;
}
