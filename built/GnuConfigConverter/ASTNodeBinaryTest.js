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
class ASTNodeBinaryTest extends ASTNode_1.ASTNode {
    constructor(binarytest) {
        super(binarytest);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeBinaryTest;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeBinaryTest];
        logg_1.logg("ASTNodeBinaryTest");
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, binarytest.OpPos);
        this.Op = ParserTypes_1.BinTestOperator[binarytest.Op];
        this.OpString = Token_1.op(binarytest.Op);
        this.X = ASTSingle_1.ASTSingle(ASTNodeTestExpr_1.ASTNodeTestExpr, binarytest.X);
        this.Y = ASTSingle_1.ASTSingle(ASTNodeTestExpr_1.ASTNodeTestExpr, binarytest.Y);
    }
}
exports.ASTNodeBinaryTest = ASTNodeBinaryTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUJpbmFyeVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVCaW5hcnlUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBb0M7QUFDcEMsK0NBQTRDO0FBQzVDLHVEQUFvRDtBQUNwRCxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFDOUIsK0NBQTZEO0FBQzdELG1DQUFvQztBQUVwQyxNQUFhLGlCQUFrQixTQUFRLGlCQUFPO0lBUzVDLFlBQVksVUFBdUI7UUFDakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBVGIsU0FBSSxHQUFrQyx5QkFBVyxDQUFDLGlCQUFpQixDQUFDO1FBQ3BFLGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQVNyRSxXQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsRUFBRSxHQUFHLDZCQUFlLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBRSxDQUFFLFVBQVUsQ0FBQyxFQUF1QixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLGlDQUFlLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxDQUFDLEdBQUcscUJBQVMsQ0FBQyxpQ0FBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUNyRCxDQUFDO0NBQ0Y7QUFsQkQsOENBa0JDIn0=