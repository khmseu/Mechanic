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
 * Gets dependency
 * @param outerName
 * @returns dependency
 */
function getDependency(outerName) {
    return util_1.promisify((name, callback) => {
        globals_1.db.get("select generation, status from dependencies where name = ?", [name], (err, row) => {
            if (err) {
                callback(err, undefined);
            }
            else {
                callback(undefined, { generation: row.generation, status: JSON.parse(row.status) });
            }
        });
    })(outerName);
}
exports.getDependency = getDependency;
//# sourceMappingURL=getDependency.js.map