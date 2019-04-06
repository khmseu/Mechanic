"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTSingle_1 = require("./ASTSingle");
function ASTArray(at, pa) {
    const aa = [];
    if (pa) {
        pa.forEach((pe) => {
            const ae = ASTSingle_1.ASTSingle(at, pe);
            if (ae) {
                aa.push(ae);
            }
        });
    }
    return aa;
}
exports.ASTArray = ASTArray;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVEFycmF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFHSCwyQ0FBd0M7QUFFeEMsU0FBZ0IsUUFBUSxDQUF5QixFQUFxQixFQUFFLEVBQWU7SUFDckYsTUFBTSxFQUFFLEdBQVMsRUFBRSxDQUFDO0lBQ3BCLElBQUksRUFBRSxFQUFFO1FBQ04sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEdBQUcscUJBQVMsQ0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckMsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNiO1FBQ0wsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUNELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQVhELDRCQVdDIn0=