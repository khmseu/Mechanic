"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const util_1 = require("util");
const PSArray_1 = require("./PSArray");
/**
 * Sets path
 * @param rex
 * @param path
 */
function setPath(rex, path) {
    assert_1.ok(util_1.types.isRegExp(rex), TypeError("first parameter must be a regular expression"));
    const n = PSArray_1.PSArray.reduce((acc, cur, idx) => (cur[0] === rex ? idx : acc), -1);
    if (path === undefined) {
        if (n >= 0) {
            PSArray_1.PSArray.slice(n, 1);
        }
    }
    else {
        assert_1.ok(Array.isArray(path), TypeError("second parameter must be Path or undefined"));
        assert_1.ok(path.length > 0, "path may not be empty");
        if (n >= 0) {
            PSArray_1.PSArray[n][1] = path;
        }
        else {
            PSArray_1.PSArray.unshift([rex, path]);
        }
    }
}
exports.setPath = setPath;
//# sourceMappingURL=setPath.js.map