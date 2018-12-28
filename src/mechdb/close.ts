/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { promisify } from "util";
import { CallbackC } from "./CallbackC";
import { db } from "./globals";
/**
 *
 * @return
 */
export function close(): Promise<void> {
  return promisify((callback: CallbackC) => {
    db.close((errp?: Error | null) => callback(errp || undefined, null));
  })();
}
