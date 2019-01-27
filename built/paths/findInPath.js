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
    const found = PSArray_1.PSArray.find((cur) => cur[0].test(target));
    assert_1.ok(found, Error("Missing catch-all path: did not match " + target));
    return pathSearch_1.pathSearch(found[1], target);
}
exports.findInPath = findInPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZEluUGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRocy9maW5kSW5QYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxtQ0FBNEI7QUFFNUIsaURBQThDO0FBQzlDLHVDQUFvQztBQUVwQzs7OztHQUlHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLE1BQWM7SUFDdkMsTUFBTSxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6RCxXQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyx3Q0FBd0MsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLE9BQU8sdUJBQVUsQ0FBQyxLQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUpELGdDQUlDIn0=