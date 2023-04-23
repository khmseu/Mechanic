"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTSlice = void 0;
const logg_1 = require("../logg");
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTSingleNotNull_1 = require("./ASTSingleNotNull");
class ASTSlice {
    constructor(slice) {
        (0, logg_1.logg)("ASTSlice");
        this.Offset = (0, ASTSingleNotNull_1.ASTSingleNotNull)(ASTNodeArithmExpr_1.ASTNodeArithmExpr, slice.Offset, null, "Offset");
        this.Length = (0, ASTSingleNotNull_1.ASTSingleNotNull)(ASTNodeArithmExpr_1.ASTNodeArithmExpr, slice.Length, null, "Length");
        [].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
}
exports.ASTSlice = ASTSlice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUU2xpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2dlbmVyYXRlZC9BU1RTbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7OztBQUVILGtDQUErQjtBQUUvQiwyREFBd0Q7QUFDeEQseURBQXNEO0FBRXRELE1BQWEsUUFBUTtJQUluQixZQUFZLEtBQWM7UUFDeEIsSUFBQSxXQUFJLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFBLG1DQUFnQixFQUFDLHFDQUFpQixFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBQSxtQ0FBZ0IsRUFBQyxxQ0FBaUIsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNoRixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDZixNQUFNLElBQUksR0FBdUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFkRCw0QkFjQyJ9