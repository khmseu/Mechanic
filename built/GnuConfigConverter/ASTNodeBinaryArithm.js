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
const ParserTypes_1 = require("./ParserTypes");
const Token_1 = require("./Token");
class ASTNodeBinaryArithm extends ASTNode_1.ASTNode {
    constructor(binaryarithm) {
        super(binaryarithm);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeBinaryArithm;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeBinaryArithm];
        logg_1.logg("ASTNodeBinaryArithm");
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, binaryarithm.OpPos);
        this.Op = ParserTypes_1.BinAritOperator[binaryarithm.Op];
        this.OpString = Token_1.op(binaryarithm.Op);
        this.X = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, binaryarithm.X);
        this.Y = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, binaryarithm.Y);
    }
}
exports.ASTNodeBinaryArithm = ASTNodeBinaryArithm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUJpbmFyeUFyaXRobS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUJpbmFyeUFyaXRobS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQW9DO0FBQ3BDLDJEQUF3RDtBQUN4RCwrQ0FBNEM7QUFDNUMscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBQzlCLCtDQUErRDtBQUMvRCxtQ0FBb0M7QUFFcEMsTUFBYSxtQkFBb0IsU0FBUSxpQkFBTztJQVM5QyxZQUFZLFlBQTJCO1FBQ3JDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQVRmLFNBQUksR0FBb0MseUJBQVcsQ0FBQyxtQkFBbUIsQ0FBQztRQUN4RSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFTdkUsV0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLEVBQUUsR0FBRyw2QkFBZSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQUUsQ0FBRSxZQUFZLENBQUMsRUFBdUIsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxDQUFDLEdBQUcscUJBQVMsQ0FBQyxxQ0FBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLHFDQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUN6RCxDQUFDO0NBQ0Y7QUFsQkQsa0RBa0JDIn0=