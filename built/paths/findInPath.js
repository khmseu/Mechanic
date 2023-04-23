"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.findInPath = void 0;
const assert_1 = require("assert");
const pathSearch_1 = require("../io/pathSearch");
const PSArray_1 = require("./PSArray");
/**
 * Finds in path
 * @param target
 * @returns in path
 */
function findInPath(target) {
    const found = PSArray_1.PSArray.find((cur) => cur[0].test(target));
    (0, assert_1.ok)(found, Error("Missing catch-all path: did not match " + target));
    return (0, pathSearch_1.pathSearch)(found[1], target);
}
exports.findInPath = findInPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZEluUGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRocy9maW5kSW5QYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7O0FBRUgsbUNBQTRCO0FBRTVCLGlEQUE4QztBQUM5Qyx1Q0FBb0M7QUFFcEM7Ozs7R0FJRztBQUNILFNBQWdCLFVBQVUsQ0FBQyxNQUFjO0lBQ3ZDLE1BQU0sS0FBSyxHQUFHLGlCQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDekQsSUFBQSxXQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyx3Q0FBd0MsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLE9BQU8sSUFBQSx1QkFBVSxFQUFDLEtBQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBSkQsZ0NBSUMifQ==