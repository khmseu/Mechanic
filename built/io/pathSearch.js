"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const fs_1 = require("fs");
const path_1 = require("path");
/**
 * Paths search
 * modified from path-search module
 * @param path
 * @param name
 * @returns search
 */
function pathSearch(path, name) {
    assert_1.ok(path.length > 0, Error("path may not be empty"));
    const nn = path_1.normalize(name);
    if (path_1.isAbsolute(name)) {
        const rn = path_1.resolve(name);
        return [rn, path_1.parse(rn).root, nn];
    }
    let c0;
    let d0;
    // tslint:disable-next-line:no-shadowed-variable
    for (const dir of path) {
        const candidate = path_1.resolve(dir, name);
        if (fs_1.existsSync(candidate)) {
            return [candidate, path_1.resolve(dir), nn];
        }
        if (!c0 && !d0) {
            c0 = candidate;
            d0 = dir;
        }
    }
    return [c0, path_1.resolve(d0), nn];
}
exports.pathSearch = pathSearch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aFNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pby9wYXRoU2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxtQ0FBNEI7QUFDNUIsMkJBQWdDO0FBQ2hDLCtCQUE2RDtBQUk3RDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixVQUFVLENBQUMsSUFBVSxFQUFFLElBQVk7SUFDakQsV0FBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDcEQsTUFBTSxFQUFFLEdBQUcsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixJQUFJLGlCQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDcEIsTUFBTSxFQUFFLEdBQUcsY0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNqQztJQUNELElBQUksRUFBRSxDQUFDO0lBQ1AsSUFBSSxFQUFFLENBQUM7SUFDUCxnREFBZ0Q7SUFDaEQsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDdEIsTUFBTSxTQUFTLEdBQUcsY0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLGVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN6QixPQUFPLENBQUMsU0FBUyxFQUFFLGNBQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDZCxFQUFFLEdBQUcsU0FBUyxDQUFDO1lBQ2YsRUFBRSxHQUFHLEdBQUcsQ0FBQztTQUNWO0tBQ0Y7SUFDRCxPQUFPLENBQUMsRUFBRyxFQUFFLGNBQU8sQ0FBQyxFQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBckJELGdDQXFCQyJ9