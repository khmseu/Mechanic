"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = require("sqlite3");
const globals_1 = require("./globals");
const rebuild_1 = require("./rebuild");
/**
 *
 * @return
 */
function open() {
    // while initializing, use throw
    const sqlite3 = sqlite3_1.verbose();
    globals_1.setDb(new sqlite3.Database(".mechanic.db", (err) => {
        if (err) {
            throw err;
        }
        // tslint:disable-next-line:no-shadowed-variable
        globals_1.db.get("pragma application_id", [], (err, row) => {
            if (err) {
                throw err;
            }
            if (row.application_id === globals_1.appId) {
                // tslint:disable-next-line:no-shadowed-variable
                globals_1.db.get("pragma user_version", [], (err, row) => {
                    if (err) {
                        throw err;
                    }
                    if (row.user_version === globals_1.userVer) {
                        return globals_1.db;
                    }
                    else {
                        rebuild_1.rebuild();
                        return globals_1.db;
                    }
                });
            }
            else {
                // tslint:disable-next-line:no-shadowed-variable
                globals_1.db.get("pragma schema_version", [], (err, row) => {
                    if (err) {
                        throw err;
                    }
                    if (row.schema_version === 0) {
                        rebuild_1.rebuild();
                        return globals_1.db;
                    }
                    else {
                        throw Error("Found .mechanic.db but it is not a Mechanic DB");
                    }
                });
            }
        });
    }));
}
exports.open = open;
//# sourceMappingURL=open.js.map