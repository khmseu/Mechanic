"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("./globals");
/**
 *
 * @return
 */
function rebuild() {
    // try to empty
    globals_1.db.all("select * from sqlite_master where type = 'table'", [], (err, rows) => {
        if (err) {
            throw err;
        }
        globals_1.db.serialize(() => {
            rows.forEach((row) => globals_1.db.run(`drop table ${row.name}`));
            // just in case
            globals_1.db.run(`pragma user_version(0)`);
            // mark as mine
            globals_1.db.run(`pragma application_id(${globals_1.appId})`);
            // dependencies.status is a JSON object for files, or the content for variables
            // dependlist is a JSON object of an array of 2-element arrays (dependencies.rowid, dependencies.generation)
            globals_1.db.run("create table dependencies(name text primary key, generation integer, status text)");
            globals_1.db.run("create table targets(name text primary key, dependlist text)");
            // now at this version
            globals_1.db.run(`pragma user_version(${globals_1.userVer})`);
        });
    });
}
exports.rebuild = rebuild;
//# sourceMappingURL=rebuild.js.map