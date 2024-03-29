"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTNodeBinaryArithm = void 0;
const logg_1 = require("../logg");
const ParserTypes_1 = require("../ParserTypes");
const Token_1 = require("../Token");
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
        (0, logg_1.logg)("ASTNodeBinaryArithm");
        this.OpPos = (0, ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull)(ASTPos_1.ASTPos, binaryarithm.OpPos);
        this.Op = ParserTypes_1.BinAritOperator[binaryarithm.Op];
        this.OpString = (0, Token_1.op)(binaryarithm.Op);
        this.X = (0, ASTSingleNotNull_1.ASTSingleNotNull)(ASTNodeArithmExpr_1.ASTNodeArithmExpr, binaryarithm.X, this, "X");
        this.Y = (0, ASTSingleNotNull_1.ASTSingleNotNull)(ASTNodeArithmExpr_1.ASTNodeArithmExpr, binaryarithm.Y, this, "Y");
        ["kind", "parent", "parentField", "OpPos"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPreBefore(this);
        visitor.visitASTNodeBinaryArithmPre(this);
        visitor.visitAllPreAfter(this);
        this.Y.accept(visitor);
        this.Y.accept(visitor);
        visitor.visitAllPostBefore(this);
        visitor.visitASTNodeBinaryArithmPost(this);
        visitor.visitAllPostAfter(this);
    }
}
exports.ASTNodeBinaryArithm = ASTNodeBinaryArithm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUJpbmFyeUFyaXRobS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvZ2VuZXJhdGVkL0FTVE5vZGVCaW5hcnlBcml0aG0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOzs7QUFFSCxrQ0FBK0I7QUFDL0IsZ0RBQWdFO0FBQ2hFLG9DQUFxQztBQUNyQyx1Q0FBb0M7QUFDcEMsMkRBQXdEO0FBQ3hELCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMscUVBQWtFO0FBQ2xFLHlEQUFzRDtBQUd0RCxNQUFhLG1CQUFvQixTQUFRLGlCQUFPO0lBUzlDLFlBQVksWUFBMkIsRUFBUyxNQUFzQixFQUFTLFdBQW1CO1FBQ2hHLEtBQUssQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBREssV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQVIzRixTQUFJLEdBQW9DLHlCQUFXLENBQUMsbUJBQW1CLENBQUM7UUFDeEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBU3ZFLElBQUEsV0FBSSxFQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFBLCtDQUFzQixFQUFDLGVBQU0sRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEVBQUUsR0FBRyw2QkFBZSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUEsVUFBRSxFQUFFLFlBQVksQ0FBQyxFQUF1QixDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFBLG1DQUFnQixFQUFDLHFDQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBQSxtQ0FBZ0IsRUFBQyxxQ0FBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4RSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3ZELE1BQU0sSUFBSSxHQUF1QixNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxNQUFNLENBQUMsT0FBdUI7UUFDbkMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBakNELGtEQWlDQyJ9