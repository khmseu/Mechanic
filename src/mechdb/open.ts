/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { verbose } from "sqlite3";
import { appId, db, userVer } from "./globals";
import { rebuild } from "./rebuild";

/**
 *
 * @return
 */
export function open() {
  // while initializing, use throw
  const sqlite3 = verbose();
  db = new sqlite3.Database(".mechanic.db", (err) => {
    if (err) {
      throw err;
    }
    // tslint:disable-next-line:no-shadowed-variable
    db.get("pragma application_id", [], (err, row) => {
      if (err) {
        throw err;
      }
      if (row.application_id === appId) {
        // tslint:disable-next-line:no-shadowed-variable
        db.get("pragma user_version", [], (err, row) => {
          if (err) {
            throw err;
          }
          if (row.user_version === userVer) {
            return db;
          } else {
            rebuild();
            return db;
          }
        });
      } else {
        // tslint:disable-next-line:no-shadowed-variable
        db.get("pragma schema_version", [], (err, row) => {
          if (err) {
            throw err;
          }
          if (row.schema_version === 0) {
            rebuild();
            return db;
          } else {
            throw Error("Found .mechanic.db but it is not a Mechanic DB");
          }
        });
      }
    });
  });
}
