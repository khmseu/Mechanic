"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
        assert_1.ok(path.length > 0, Error("path may not be empty"));
        if (n >= 0) {
            PSArray_1.PSArray[n][1] = path;
        }
        else {
            PSArray_1.PSArray.unshift([rex, path]);
        }
    }
}
exports.setPath = setPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0UGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRocy9zZXRQYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxtQ0FBNEI7QUFFNUIsdUNBQW9DO0FBRXBDOzs7O0dBSUc7QUFDSCxTQUFnQixPQUFPLENBQUMsR0FBVyxFQUFFLElBQVU7SUFDN0MsTUFBTSxDQUFDLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNWLGlCQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyQjtLQUNGO1NBQU07UUFDTCxXQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixpQkFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN0QjthQUFNO1lBQ0wsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM5QjtLQUNGO0FBQ0gsQ0FBQztBQWRELDBCQWNDIn0=