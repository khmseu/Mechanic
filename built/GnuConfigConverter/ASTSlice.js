"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTSlice {
    constructor(slice) {
        logg_1.logg("ASTSlice");
        const { Offset, Length, ...rest_slice } = slice;
        this.Offset = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, Offset);
        this.Length = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, Length);
        this.rest = rest_slice;
    }
}
exports.ASTSlice = ASTSlice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUU2xpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVFNsaWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCwyREFBd0Q7QUFDeEQsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUc5QixNQUFhLFFBQVE7SUFLbkIsWUFBWSxLQUFjO1FBQ3hCLFdBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQixNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFTLENBQUMscUNBQWlCLEVBQUUsTUFBTSxDQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBUyxDQUFDLHFDQUFpQixFQUFFLE1BQU0sQ0FBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQVpELDRCQVlDIn0=