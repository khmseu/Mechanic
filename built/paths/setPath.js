"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPath = void 0;
const assert_1 = require("assert");
const PSArray_1 = require("./PSArray");
/**
 * Sets path
 * @param rex
 * @param path
 */
function setPath(rex, path) {
    const n = PSArray_1.PSArray.reduce((acc, cur, idx) => (cur[0] === rex ? idx : acc), -1);
    if (path === undefined) {
        if (n >= 0) {
            PSArray_1.PSArray.slice(n, 1);
        }
    }
    else {
        (0, assert_1.ok)(path.length > 0, Error("path may not be empty"));
        if (n >= 0) {
            PSArray_1.PSArray[n][1] = path;
        }
        else {
            PSArray_1.PSArray.unshift([rex, path]);
        }
    }
}
exports.setPath = setPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0UGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRocy9zZXRQYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7O0FBRUgsbUNBQTRCO0FBRTVCLHVDQUFvQztBQUVwQzs7OztHQUlHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFDLEdBQVcsRUFBRSxJQUFVO0lBQzdDLE1BQU0sQ0FBQyxHQUFHLGlCQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixpQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckI7S0FDRjtTQUFNO1FBQ0wsSUFBQSxXQUFFLEVBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixpQkFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN0QjthQUFNO1lBQ0wsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM5QjtLQUNGO0FBQ0gsQ0FBQztBQWRELDBCQWNDIn0=