/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { promisify } from "util";
import { CallbackSD } from "./CallbackSD";
import { db } from "./globals";

/**
 * Sets dependency
 * @param outerName
 * @param outerStatus
 * @returns
 */
export function setDependency(outerName: string, outerStatus: any) {
  return promisify((name: string, status: any, callback: CallbackSD) => {
    status = JSON.stringify(status);
    exports
      .getDependency(name)
      .then((old?: { generation: number; status: any }) => {
        if (old) {
          if (old.status === status) {
            callback(undefined, null);
          } else {
            db.run(
              "update dependencies set generation = generation + 1, status = ? where name = ?", //
              [status, name],
              (err?: Error) => callback(err, null),
            );
          }
        } else {
          db.run(
            "insert into dependencies(name, generation, status) values(?, 1, ?)", //
            [name, status],
            (err?: Error) => callback(err, null),
          );
        }
      })
      .catch((err?: Error) => callback(err, null));
  })(outerName, outerStatus);
}
