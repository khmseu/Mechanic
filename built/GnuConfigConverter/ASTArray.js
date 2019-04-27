"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTSingle_1 = require("./ASTSingle");
// tslint:disable-next-line:max-line-length
function ASTArray(at, pa, parent, parentField) {
    const aa = [];
    if (pa) {
        pa.forEach((pe) => {
            const ae = ASTSingle_1.ASTSingle(at, pe, parent, parentField);
            if (ae) {
                aa.push(ae);
            }
        });
    }
    return aa;
}
exports.ASTArray = ASTArray;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVEFycmF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFHSCwyQ0FBd0M7QUFFeEMsMkNBQTJDO0FBQzNDLFNBQWdCLFFBQVEsQ0FBeUIsRUFBa0UsRUFBRSxFQUFlLEVBQUUsTUFBc0IsRUFBRSxXQUFtQjtJQUMvSyxNQUFNLEVBQUUsR0FBUyxFQUFFLENBQUM7SUFDcEIsSUFBSSxFQUFFLEVBQUU7UUFDTixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsR0FBRyxxQkFBUyxDQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzFELElBQUksRUFBRSxFQUFFO2dCQUNOLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDYjtRQUNMLENBQUMsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUM7QUFYRCw0QkFXQyJ9