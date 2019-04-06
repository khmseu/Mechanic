"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTNode_1 = require("./ASTNode");
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeBinaryArithm extends ASTNode_1.ASTNode {
    constructor(binaryarithm) {
        super(binaryarithm);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeBinaryArithm;
        logg_1.logg("ASTNodeBinaryArithm");
        const { OpPos, Op, X, Y, ...rest_binaryarithm } = binaryarithm;
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, OpPos);
        this.Op = Op;
        this.X = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, X);
        this.Y = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, Y);
        this.rest = rest_binaryarithm;
    }
}
exports.ASTNodeBinaryArithm = ASTNodeBinaryArithm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUJpbmFyeUFyaXRobS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUJpbmFyeUFyaXRobS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQW9DO0FBQ3BDLDJEQUF3RDtBQUN4RCwrQ0FBNEM7QUFDNUMscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsbUJBQW9CLFNBQVEsaUJBQU87SUFPOUMsWUFBWSxZQUEyQjtRQUNyQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFQZixTQUFJLEdBQW9DLHlCQUFXLENBQUMsbUJBQW1CLENBQUM7UUFRN0UsV0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDNUIsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLGlCQUFpQixFQUFFLEdBQUcsWUFBWSxDQUFDO1FBQy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsQ0FBQyxHQUFHLHFCQUFTLENBQUMscUNBQWlCLEVBQUUsQ0FBQyxDQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLHFDQUFpQixFQUFFLENBQUMsQ0FBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztDQUNGO0FBakJELGtEQWlCQyJ9