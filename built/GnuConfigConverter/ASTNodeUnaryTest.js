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
class ASTNodeUnaryTest extends ASTNode_1.ASTNode {
    constructor(unarytest) {
        super(unarytest);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeUnaryTest;
        logg_1.logg("ASTNodeUnaryTest");
        const { OpPos, Op, X, ...rest_unarytest } = unarytest;
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, OpPos);
        this.Op = Op;
        this.X = ASTSingle_1.ASTSingle(ASTNodeTestExpr_1.ASTNodeTestExpr, X);
        this.rest = rest_unarytest;
    }
}
exports.ASTNodeUnaryTest = ASTNodeUnaryTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVVuYXJ5VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZVVuYXJ5VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsZ0JBQWlCLFNBQVEsaUJBQU87SUFNM0MsWUFBWSxTQUFxQjtRQUMvQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFOWixTQUFJLEdBQWlDLHlCQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFPdkUsV0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekIsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsY0FBYyxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsQ0FBQyxHQUFHLHFCQUFTLENBQUMsaUNBQWUsRUFBRSxDQUFDLENBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFmRCw0Q0FlQyJ9