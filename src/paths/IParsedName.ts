/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { VarSet } from "../variables/VarSet";

/**
 * Iparsed name
 */
export interface IParsedName {
  /**
   *
   */
  vars: VarSet;
  /**
   *
   */
  split: string[];
  /**
   *
   */
  parts: string[];
}
