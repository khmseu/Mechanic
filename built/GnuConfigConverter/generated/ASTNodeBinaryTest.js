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
const ASTMoreBinaryTest_1 = require("./ASTMoreBinaryTest");
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeTestExpr_1 = require("./ASTNodeTestExpr");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
const ASTSingleNotNull_1 = require("./ASTSingleNotNull");
class ASTNodeBinaryTest extends ASTNode_1.ASTNode {
    constructor(binarytest, parent, parentField) {
        super(binarytest, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeBinaryTest;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeBinaryTest];
        this.more = new ASTMoreBinaryTest_1.ASTMoreBinaryTest();
        logg_1.logg("ASTNodeBinaryTest");
        this.OpPos = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, binarytest.OpPos);
        this.Op = ParserTypes_1.BinTestOperator[binarytest.Op];
        this.OpString = Token_1.op(binarytest.Op);
        this.X = ASTSingleNotNull_1.ASTSingleNotNull(ASTNodeTestExpr_1.ASTNodeTestExpr, binarytest.X, this, "X");
        this.Y = ASTSingleNotNull_1.ASTSingleNotNull(ASTNodeTestExpr_1.ASTNodeTestExpr, binarytest.Y, this, "Y");
        ["kind", "parent", "parentField", "OpPos"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPre(this);
        visitor.visitASTNodeBinaryTestPre(this);
        this.X.accept(visitor);
        this.Y.accept(visitor);
        visitor.visitASTNodeBinaryTestPost(this);
        visitor.visitAllPost(this);
    }
}
exports.ASTNodeBinaryTest = ASTNodeBinaryTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUJpbmFyeVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2dlbmVyYXRlZC9BU1ROb2RlQmluYXJ5VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsa0NBQStCO0FBQy9CLGdEQUE4RDtBQUM5RCxvQ0FBcUM7QUFDckMsMkRBQXdEO0FBQ3hELHVDQUFvQztBQUNwQywrQ0FBNEM7QUFDNUMsdURBQW9EO0FBQ3BELHFDQUFrQztBQUNsQyxxRUFBa0U7QUFDbEUseURBQXNEO0FBR3RELE1BQWEsaUJBQWtCLFNBQVEsaUJBQU87SUFVNUMsWUFBWSxVQUF1QixFQUFTLE1BQXNCLEVBQVMsV0FBbUI7UUFDNUYsS0FBSyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFERyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBVHZGLFNBQUksR0FBa0MseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQUNwRSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEUsU0FBSSxHQUFzQixJQUFJLHFDQUFpQixFQUFFLENBQUM7UUFTdkQsV0FBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRywrQ0FBc0IsQ0FBQyxlQUFNLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxFQUFFLEdBQUcsNkJBQWUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFFLENBQUUsVUFBVSxDQUFDLEVBQXVCLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsQ0FBQyxHQUFHLG1DQUFnQixDQUFDLGlDQUFlLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLENBQUMsR0FBRyxtQ0FBZ0IsQ0FBQyxpQ0FBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdkQsTUFBTSxJQUFJLEdBQXVCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxPQUF1QjtRQUNuQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFoQ0QsOENBZ0NDIn0=