/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ITargetDetails } from "./ITargetDetails";
import { VarTree } from "./VarTree";
export interface ITargetMatcher {
  match(full: string, parent: string, child: string): ITargetDetails | null;
  generate(vars: VarTree): string;
  toString(): string;
}
