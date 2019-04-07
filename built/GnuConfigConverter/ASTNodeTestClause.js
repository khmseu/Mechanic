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
class ASTNodeTestClause extends ASTNode_1.ASTNode {
    constructor(testclause) {
        super(testclause);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeTestClause;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeTestClause];
        logg_1.logg("ASTNodeTestClause");
        this.Left = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, testclause.Left);
        this.Right = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, testclause.Right);
        this.X = ASTSingle_1.ASTSingle(ASTNodeTestExpr_1.ASTNodeTestExpr, testclause.X);
    }
}
exports.ASTNodeTestClause = ASTNodeTestClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVRlc3RDbGF1c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVUZXN0Q2xhdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBb0M7QUFDcEMsK0NBQTRDO0FBQzVDLHVEQUFvRDtBQUNwRCxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxpQkFBa0IsU0FBUSxpQkFBTztJQU81QyxZQUFZLFVBQXVCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQVBiLFNBQUksR0FBa0MseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQUNwRSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFPckUsV0FBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLGlDQUFlLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ3JELENBQUM7Q0FDRjtBQWRELDhDQWNDIn0=