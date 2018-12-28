/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { promisify } from "util";
import { CallbackST } from "./CallbackST";
import { db } from "./globals";

/**
 * Sets target
 * @param outerName
 * @param outerDependlistJ
 * @returns target
 */
export function setTarget(outerName: string, outerDependlistJ: string[]): Promise<void> {
  return promisify((name: string, dependlistJ: string[], callback: CallbackST) => {
    const dependlist = JSON.stringify(dependlistJ);
    exports
      .getTarget(name)
      .then((old?: { generation: number; status: string }) => {
        if (old) {
          if (old.status === dependlist) {
            callback(undefined, null);
          } else {
            db.run(
              "update targets set dependlist = ? where name = ?", //
              [dependlist, name],
              (err?: Error) => callback(err, null),
            );
          }
        } else {
          db.run(
            "insert into targets(name, dependlist) values(?, ?)", //
            [name, dependlist],
            (err?: Error) => callback(err, null),
          );
        }
      })
      .catch((err?: Error) => callback(err, null));
  })(outerName, outerDependlistJ);
}
