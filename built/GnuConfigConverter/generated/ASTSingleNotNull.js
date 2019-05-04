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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUU2luZ2xlTm90TnVsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvZ2VuZXJhdGVkL0FTVFNpbmdsZU5vdE51bGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILG1DQUE0QjtBQUc1QiwyQ0FBMkM7QUFDM0MsU0FBZ0IsZ0JBQWdCLENBQXlCLEVBQW1FLEVBQUUsRUFBYSxFQUFFLE1BQXNCLEVBQUUsV0FBbUI7SUFDdEwsV0FBRSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNwQixNQUFNLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFHLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUpELDRDQUlDIn0=