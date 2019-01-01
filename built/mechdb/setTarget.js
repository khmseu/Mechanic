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
 * Sets target
 * @param outerName
 * @param outerDependlistJ
 * @returns target
 */
function setTarget(outerName, outerDependlistJ) {
    return util_1.promisify((name, dependlistJ, callback) => {
        const dependlist = JSON.stringify(dependlistJ);
        exports
            .getTarget(name)
            .then((old) => {
            if (old) {
                if (old.status === dependlist) {
                    callback(undefined, null);
                }
                else {
                    globals_1.db.run("update targets set dependlist = ? where name = ?", //
                    [dependlist, name], (err) => callback(err, null));
                }
            }
            else {
                globals_1.db.run("insert into targets(name, dependlist) values(?, ?)", //
                [name, dependlist], (err) => callback(err, null));
            }
        })
            .catch((err) => callback(err, null));
    })(outerName, outerDependlistJ);
}
exports.setTarget = setTarget;
//# sourceMappingURL=setTarget.js.map