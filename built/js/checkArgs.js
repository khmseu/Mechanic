"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
/**
 * Checks args
 * @param wanted
 * @param got
 */
function checkArgs(wanted, got) {
    assert_1.ok(got.length === wanted, //
    Error("Must have " + wanted + " parameter" + (wanted === 1 ? "" : "s") + ", got " + got.length));
}
exports.checkArgs = checkArgs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tBcmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2pzL2NoZWNrQXJncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsbUNBQTRCO0FBRzVCOzs7O0dBSUc7QUFDSCxTQUFnQixTQUFTLENBQUMsTUFBYyxFQUFFLEdBQWlCO0lBQ3pELFdBQUUsQ0FDQSxHQUFHLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRSxFQUFFO0lBQ3pCLEtBQUssQ0FBQyxZQUFZLEdBQUcsTUFBTSxHQUFHLFlBQVksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FDaEcsQ0FBQztBQUNKLENBQUM7QUFMRCw4QkFLQyJ9