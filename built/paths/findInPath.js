"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const pathSearch_1 = require("../io/pathSearch");
const PSArray_1 = require("./PSArray");
/**
 * Finds in path
 * @param target
 * @returns in path
 */
function findInPath(target) {
    assert_1.ok(typeof target === "string", TypeError("parameter must be a string"));
    const found = PSArray_1.PSArray.find((cur) => cur[0].test(target));
    assert_1.ok(found, "Missing catch-all path");
    return pathSearch_1.pathSearch(found[1], target);
}
exports.findInPath = findInPath;
//# sourceMappingURL=findInPath.js.map