/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { promisify } from "util";
import { CallbackGT } from "./CallbackGT";
import { db } from "./globals";

// after initializing, use promises
/**
 * Gets target
 * @param outerName
 * @returns target
 */
export function getTarget(outerName: string): Promise<void> {
  return promisify((name: string, callback: CallbackGT) => {
    //  export const getTarget: StringToPromise = promisify((name: string, callback: CallbackGT) => {
    db.get("select dependlist from targets where name = ?", [name], (err, row) => {
      if (err) {
        callback(err, undefined);
      } else {
        callback(undefined, JSON.parse(row.dependlist));
      }
    });
  })(outerName);
}
