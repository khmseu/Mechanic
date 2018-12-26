/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { promisify } from "util";
import { CallbackGD } from "./CallbackGD";
import { db } from "./globals";

export function getDependency(outerName: string): Promise<void> {
  return promisify((name: string, callback: CallbackGD) => {
    db.get("select generation, status from dependencies where name = ?", [name], (err, row) => {
      if (err) {
        callback(err, undefined);
      } else {
        callback(undefined, { generation: row.generation, status: JSON.parse(row.status) });
      }
    });
  })(outerName);
}
