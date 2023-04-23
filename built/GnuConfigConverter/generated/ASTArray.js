"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTArray = void 0;
const ASTSingle_1 = require("./ASTSingle");
// tslint:disable-next-line:max-line-length
function ASTArray(at, pa, parent, parentField) {
    const aa = [];
    if (pa) {
        pa.forEach((pe) => {
            const ae = (0, ASTSingle_1.ASTSingle)(at, pe, parent, parentField);
            if (ae) {
                aa.push(ae);
            }
        });
    }
    return aa;
}
exports.ASTArray = ASTArray;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2dlbmVyYXRlZC9BU1RBcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7OztBQUdILDJDQUF3QztBQUV4QywyQ0FBMkM7QUFDM0MsU0FBZ0IsUUFBUSxDQUF5QixFQUFrRSxFQUFFLEVBQWUsRUFBRSxNQUFzQixFQUFFLFdBQW1CO0lBQy9LLE1BQU0sRUFBRSxHQUFTLEVBQUUsQ0FBQztJQUNwQixJQUFJLEVBQUUsRUFBRTtRQUNOLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxHQUFHLElBQUEscUJBQVMsRUFBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUMxRCxJQUFJLEVBQUUsRUFBRTtnQkFDTixFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2I7UUFDTCxDQUFDLENBQUMsQ0FBQztLQUNKO0lBQ0QsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBWEQsNEJBV0MifQ==