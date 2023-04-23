"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertClass = void 0;
const assert_1 = require("assert");
/**
 * Asserts class
 * @template C
 * @param theClass
 * @param object
 * @returns class
 */
function assertClass(theClass, object) {
    (0, assert_1.ok)(object instanceof theClass, TypeError("need a " + theClass.name));
    return object;
}
exports.assertClass = assertClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0Q2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvanMvYXNzZXJ0Q2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOzs7QUFFSCxtQ0FBNEI7QUFFNUI7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsV0FBVyxDQUFJLFFBQWEsRUFBRSxNQUFXO0lBQ3ZELElBQUEsV0FBRSxFQUFDLE1BQU0sWUFBWSxRQUFRLEVBQUUsU0FBUyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRSxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBSEQsa0NBR0MifQ==