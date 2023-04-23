"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkArgs = void 0;
const assert_1 = require("assert");
/**
 * Checks args
 * @param wanted
 * @param got
 */
function checkArgs(wanted, got) {
    (0, assert_1.ok)(got.length === wanted, //
    Error("Must have " + wanted + " parameter" + (wanted === 1 ? "" : "s") + ", got " + got.length));
}
exports.checkArgs = checkArgs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tBcmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pzL2NoZWNrQXJncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7OztBQUVILG1DQUE0QjtBQUc1Qjs7OztHQUlHO0FBQ0gsU0FBZ0IsU0FBUyxDQUFDLE1BQWMsRUFBRSxHQUFpQjtJQUN6RCxJQUFBLFdBQUUsRUFDQSxHQUFHLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRSxFQUFFO0lBQ3pCLEtBQUssQ0FBQyxZQUFZLEdBQUcsTUFBTSxHQUFHLFlBQVksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FDaEcsQ0FBQztBQUNKLENBQUM7QUFMRCw4QkFLQyJ9