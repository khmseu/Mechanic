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
// after initializing, use promises
/**
 * Gets target
 * @param outerName
 * @returns target
 */
function getTarget(outerName) {
    return util_1.promisify((name, callback) => {
        //  export const getTarget: StringToPromise = promisify((name: string, callback: CallbackGT) => {
        globals_1.db.get("select dependlist from targets where name = ?", [name], (err, row) => {
            if (err) {
                callback(err, undefined);
            }
            else {
                callback(undefined, JSON.parse(row.dependlist));
            }
        });
    })(outerName);
}
exports.getTarget = getTarget;
//# sourceMappingURL=getTarget.js.map