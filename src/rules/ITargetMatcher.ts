/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { VarTree } from "./VarTree";
import { ITargetDetails } from "./ITargetDetails";
export interface ITargetMatcher {
  match(full: string, parent: string, child: string): ITargetDetails | null;
  generate(vars: VarTree): string;
  toString(): string;
}
