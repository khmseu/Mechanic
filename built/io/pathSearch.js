"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathSearch = void 0;
const assert_1 = require("assert");
const fs_1 = require("fs");
const path_1 = require("path");
/**
 * Paths search
 * modified from path-search module
 *
 * @param path
 * @param name
 * @returns search
 */
const pathSearch = (path, name) => {
    (0, assert_1.ok)(path.length > 0, Error("path may not be empty"));
    const nn = (0, path_1.normalize)(name);
    if ((0, path_1.isAbsolute)(name)) {
        const rn = (0, path_1.resolve)(name);
        return [rn, (0, path_1.parse)(rn).root, nn];
    }
    let c0 = "";
    let d0 = "";
    for (const dir of path) {
        const candidate = (0, path_1.resolve)(dir, name);
        if ((0, fs_1.existsSync)(candidate)) {
            return [candidate, (0, path_1.resolve)(dir), nn];
        }
        if (!c0 && !d0) {
            c0 = candidate;
            d0 = dir;
        }
    }
    return [c0, (0, path_1.resolve)(d0), nn];
};
exports.pathSearch = pathSearch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aFNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pby9wYXRoU2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7O0FBRUgsbUNBQTRCO0FBQzVCLDJCQUFnQztBQUNoQywrQkFBNkQ7QUFJN0Q7Ozs7Ozs7R0FPRztBQUNJLE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBVSxFQUFFLElBQVksRUFBd0IsRUFBRTtJQUMzRSxJQUFBLFdBQUUsRUFBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sRUFBRSxHQUFHLElBQUEsZ0JBQVMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixJQUFJLElBQUEsaUJBQVUsRUFBQyxJQUFJLENBQUMsRUFBRTtRQUNwQixNQUFNLEVBQUUsR0FBRyxJQUFBLGNBQU8sRUFBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsRUFBRSxFQUFFLElBQUEsWUFBSyxFQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNqQztJQUNELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNaLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNaLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3RCLE1BQU0sU0FBUyxHQUFHLElBQUEsY0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUEsZUFBVSxFQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBQSxjQUFPLEVBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2QsRUFBRSxHQUFHLFNBQVMsQ0FBQztZQUNmLEVBQUUsR0FBRyxHQUFHLENBQUM7U0FDVjtLQUNGO0lBQ0QsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFBLGNBQU8sRUFBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFwQlcsUUFBQSxVQUFVLGNBb0JyQiJ9