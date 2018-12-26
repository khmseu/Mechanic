/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { appId, db, userVer } from "./globals";
/**
 *
 * @return {void}
 */
export function rebuild() {
  // try to empty
  db.all("select * from sqlite_master where type = 'table'", [], (err, rows) => {
    if (err) {
      throw err;
    }
    db.serialize(() => {
      rows.forEach((row) => db.run(`drop table ${row.name}`));
      // just in case
      db.run(`pragma user_version(0)`);
      // mark as mine
      db.run(`pragma application_id(${appId})`);
      // dependencies.status is a JSON object for files, or the content for variables
      // dependlist is a JSON object of an array of 2-element arrays (dependencies.rowid, dependencies.generation)
      db.run("create table dependencies(name text primary key, generation integer, status text)");
      db.run("create table targets(name text primary key, dependlist text)");
      // now at this version
      db.run(`pragma user_version(${userVer})`);
    });
  });
}
