"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("../logg");
const ParserTypes_1 = require("../ParserTypes");
const Token_1 = require("../Token");
const ASTMoreBinaryArithm_1 = require("./ASTMoreBinaryArithm");
const ASTNode_1 = require("./ASTNode");
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
const ASTSingleNotNull_1 = require("./ASTSingleNotNull");
class ASTNodeBinaryArithm extends ASTNode_1.ASTNode {
    constructor(binaryarithm, parent, parentField) {
        super(binaryarithm, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeBinaryArithm;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeBinaryArithm];
        this.more = new ASTMoreBinaryArithm_1.ASTMoreBinaryArithm();
        logg_1.logg("ASTNodeBinaryArithm");
        this.OpPos = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, binaryarithm.OpPos);
        this.Op = ParserTypes_1.BinAritOperator[binaryarithm.Op];
        this.OpString = Token_1.op(binaryarithm.Op);
        this.X = ASTSingleNotNull_1.ASTSingleNotNull(ASTNodeArithmExpr_1.ASTNodeArithmExpr, binaryarithm.X, this, "X");
        this.Y = ASTSingleNotNull_1.ASTSingleNotNull(ASTNodeArithmExpr_1.ASTNodeArithmExpr, binaryarithm.Y, this, "Y");
        ["kind", "parent", "parentField", "OpPos"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPre(this);
        visitor.visitASTNodeBinaryArithmPre(this);
        this.X.accept(visitor);
        this.Y.accept(visitor);
        visitor.visitASTNodeBinaryArithmPost(this);
        visitor.visitAllPost(this);
    }
}
exports.ASTNodeBinaryArithm = ASTNodeBinaryArithm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUJpbmFyeUFyaXRobS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvZ2VuZXJhdGVkL0FTVE5vZGVCaW5hcnlBcml0aG0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILGtDQUErQjtBQUMvQixnREFBZ0U7QUFDaEUsb0NBQXFDO0FBQ3JDLCtEQUE0RDtBQUM1RCx1Q0FBb0M7QUFDcEMsMkRBQXdEO0FBQ3hELCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMscUVBQWtFO0FBQ2xFLHlEQUFzRDtBQUd0RCxNQUFhLG1CQUFvQixTQUFRLGlCQUFPO0lBVTlDLFlBQVksWUFBMkIsRUFBUyxNQUFzQixFQUFTLFdBQW1CO1FBQ2hHLEtBQUssQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBREssV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQVQzRixTQUFJLEdBQW9DLHlCQUFXLENBQUMsbUJBQW1CLENBQUM7UUFDeEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2xFLFNBQUksR0FBd0IsSUFBSSx5Q0FBbUIsRUFBRSxDQUFDO1FBUzNELFdBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsK0NBQXNCLENBQUMsZUFBTSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsRUFBRSxHQUFHLDZCQUFlLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBRSxDQUFFLFlBQVksQ0FBQyxFQUF1QixDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLENBQUMsR0FBRyxtQ0FBZ0IsQ0FBQyxxQ0FBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsQ0FBQyxHQUFHLG1DQUFnQixDQUFDLHFDQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdkQsTUFBTSxJQUFJLEdBQXVCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxPQUF1QjtRQUNuQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFoQ0Qsa0RBZ0NDIn0=