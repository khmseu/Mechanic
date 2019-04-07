"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeTestExpr_1 = require("./ASTNodeTestExpr");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
const ParserTypes_1 = require("./ParserTypes");
const Token_1 = require("./Token");
class ASTNodeUnaryTest extends ASTNode_1.ASTNode {
    constructor(unarytest) {
        super(unarytest);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeUnaryTest;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeUnaryTest];
        logg_1.logg("ASTNodeUnaryTest");
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, unarytest.OpPos);
        this.Op = ParserTypes_1.UnTestOperator[unarytest.Op];
        this.OpString = Token_1.op(unarytest.Op);
        this.X = ASTSingle_1.ASTSingle(ASTNodeTestExpr_1.ASTNodeTestExpr, unarytest.X);
    }
}
exports.ASTNodeUnaryTest = ASTNodeUnaryTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVVuYXJ5VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZVVuYXJ5VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBQzlCLCtDQUEyRDtBQUMzRCxtQ0FBb0M7QUFFcEMsTUFBYSxnQkFBaUIsU0FBUSxpQkFBTztJQVEzQyxZQUFZLFNBQXFCO1FBQy9CLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQVJaLFNBQUksR0FBaUMseUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsRSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFRcEUsV0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLEVBQUUsR0FBRyw0QkFBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQUUsQ0FBRSxTQUFTLENBQUMsRUFBdUIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxDQUFDLEdBQUcscUJBQVMsQ0FBQyxpQ0FBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNwRCxDQUFDO0NBQ0Y7QUFoQkQsNENBZ0JDIn0=