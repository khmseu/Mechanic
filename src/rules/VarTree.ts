/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { VarValue } from "./VarValue";
export class VarTree {
  [ns: string]:
    | {
        [vn: string]: VarValue;
      }
    | undefined;
}
