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
 *
 * @return
 */
function close() {
    return util_1.promisify((callback) => {
        globals_1.db.close((errp) => callback(errp || undefined, null));
    })();
}
exports.close = close;
//# sourceMappingURL=close.js.map