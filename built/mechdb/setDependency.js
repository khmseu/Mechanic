"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const globals_1 = require("./globals");
/**
 * Sets dependency
 * @param outerName
 * @param outerStatus
 * @returns
 */
function setDependency(outerName, outerStatus) {
    return util_1.promisify((name, status, callback) => {
        status = JSON.stringify(status);
        exports
            .getDependency(name)
            .then((old) => {
            if (old) {
                if (old.status === status) {
                    callback(undefined, null);
                }
                else {
                    globals_1.db.run("update dependencies set generation = generation + 1, status = ? where name = ?", //
                    [status, name], (err) => callback(err, null));
                }
            }
            else {
                globals_1.db.run("insert into dependencies(name, generation, status) values(?, 1, ?)", //
                [name, status], (err) => callback(err, null));
            }
        })
            .catch((err) => callback(err, null));
    })(outerName, outerStatus);
}
exports.setDependency = setDependency;
//# sourceMappingURL=setDependency.js.map