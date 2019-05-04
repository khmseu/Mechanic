"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("../logg");
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTSingleNotNull_1 = require("./ASTSingleNotNull");
class ASTSlice {
    constructor(slice) {
        logg_1.logg("ASTSlice");
        this.Offset = ASTSingleNotNull_1.ASTSingleNotNull(ASTNodeArithmExpr_1.ASTNodeArithmExpr, slice.Offset, null, "Offset");
        this.Length = ASTSingleNotNull_1.ASTSingleNotNull(ASTNodeArithmExpr_1.ASTNodeArithmExpr, slice.Length, null, "Length");
        [].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
}
exports.ASTSlice = ASTSlice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUU2xpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2dlbmVyYXRlZC9BU1RTbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsa0NBQStCO0FBRS9CLDJEQUF3RDtBQUN4RCx5REFBc0Q7QUFFdEQsTUFBYSxRQUFRO0lBSW5CLFlBQVksS0FBYztRQUN4QixXQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQ0FBZ0IsQ0FBQyxxQ0FBaUIsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsTUFBTSxHQUFHLG1DQUFnQixDQUFDLHFDQUFpQixFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hGLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNmLE1BQU0sSUFBSSxHQUF1QixNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQWRELDRCQWNDIn0=