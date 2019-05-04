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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2dlbmVyYXRlZC9BU1RBcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBR0gsMkNBQXdDO0FBRXhDLDJDQUEyQztBQUMzQyxTQUFnQixRQUFRLENBQXlCLEVBQWtFLEVBQUUsRUFBZSxFQUFFLE1BQXNCLEVBQUUsV0FBbUI7SUFDL0ssTUFBTSxFQUFFLEdBQVMsRUFBRSxDQUFDO0lBQ3BCLElBQUksRUFBRSxFQUFFO1FBQ04sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEdBQUcscUJBQVMsQ0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUMxRCxJQUFJLEVBQUUsRUFBRTtnQkFDTixFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2I7UUFDTCxDQUFDLENBQUMsQ0FBQztLQUNKO0lBQ0QsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBWEQsNEJBV0MifQ==