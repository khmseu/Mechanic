"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
// tslint:disable-next-line:max-line-length
function ASTSingleNotNull(at, pe, parent, parentField) {
    assert_1.ok(pe, parentField);
    const ae = new at(pe, parent, parentField);
    return ae;
}
exports.ASTSingleNotNull = ASTSingleNotNull;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUU2luZ2xlTm90TnVsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUU2luZ2xlTm90TnVsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsbUNBQTRCO0FBRzVCLDJDQUEyQztBQUMzQyxTQUFnQixnQkFBZ0IsQ0FBeUIsRUFBbUUsRUFBRSxFQUFhLEVBQUUsTUFBc0IsRUFBRSxXQUFtQjtJQUN0TCxXQUFFLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3BCLE1BQU0sRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUcsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUMsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBSkQsNENBSUMifQ==