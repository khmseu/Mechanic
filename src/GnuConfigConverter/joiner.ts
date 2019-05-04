/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logg } from "./logg";

export function joiner(list: string[], dlm: string): string {
  logg("joiner");
  return list.filter((s) => !!s).join(dlm);
}
