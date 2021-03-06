"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTMoreBinaryTest_1 = require("./ASTMoreBinaryTest");
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeTestExpr_1 = require("./ASTNodeTestExpr");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
const ASTSingleNotNull_1 = require("./ASTSingleNotNull");
const logg_1 = require("./logg");
const ParserTypes_1 = require("./ParserTypes");
const Token_1 = require("./Token");
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
        visitor.visitASTNodeBinaryTestPre(this);
        this.X.accept(visitor);
        this.Y.accept(visitor);
        visitor.visitASTNodeBinaryTestPost(this);
    }
}
exports.ASTNodeBinaryTest = ASTNodeBinaryTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUJpbmFyeVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVCaW5hcnlUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCwyREFBd0Q7QUFDeEQsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQscUNBQWtDO0FBQ2xDLHFFQUFrRTtBQUNsRSx5REFBc0Q7QUFFdEQsaUNBQThCO0FBQzlCLCtDQUE2RDtBQUM3RCxtQ0FBb0M7QUFFcEMsTUFBYSxpQkFBa0IsU0FBUSxpQkFBTztJQVU1QyxZQUFZLFVBQXVCLEVBQVMsTUFBc0IsRUFBUyxXQUFtQjtRQUM1RixLQUFLLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQURHLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFUdkYsU0FBSSxHQUFrQyx5QkFBVyxDQUFDLGlCQUFpQixDQUFDO1FBQ3BFLGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRSxTQUFJLEdBQXNCLElBQUkscUNBQWlCLEVBQUUsQ0FBQztRQVN2RCxXQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLCtDQUFzQixDQUFDLGVBQU0sRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEVBQUUsR0FBRyw2QkFBZSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQUUsQ0FBRSxVQUFVLENBQUMsRUFBdUIsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxDQUFDLEdBQUcsbUNBQWdCLENBQUMsaUNBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsQ0FBQyxHQUFHLG1DQUFnQixDQUFDLGlDQUFlLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN2RCxNQUFNLElBQUksR0FBdUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLE9BQXVCO1FBQ25DLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNGO0FBOUJELDhDQThCQyJ9