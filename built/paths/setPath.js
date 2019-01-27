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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0UGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRocy9zZXRQYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxtQ0FBNEI7QUFDNUIsK0JBQTZCO0FBRTdCLHVDQUFvQztBQUVwQzs7OztHQUlHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFDLEdBQVcsRUFBRSxJQUFVO0lBQzdDLFdBQUUsQ0FBQyxZQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsTUFBTSxDQUFDLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNWLGlCQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyQjtLQUNGO1NBQU07UUFDTCxXQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLENBQUMsNENBQTRDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLFdBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNWLGlCQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO2FBQU07WUFDTCxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0tBQ0Y7QUFDSCxDQUFDO0FBaEJELDBCQWdCQyJ9