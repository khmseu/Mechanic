/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Database } from "sqlite3";

export const appId = 0x4d656368;
export const userVer = 2;

/**
 *
 */
export let db: Database;
/**
 * Sets db
 * @param val
 */
export function setDb(val: Database): void {
  db = val;
}
