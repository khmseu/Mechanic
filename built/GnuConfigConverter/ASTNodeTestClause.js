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
        logg_1.logg("ASTNodeTestClause");
        const { Left, Right, X, ...rest_testclause } = testclause;
        this.Left = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Left);
        this.Right = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Right);
        this.X = ASTSingle_1.ASTSingle(ASTNodeTestExpr_1.ASTNodeTestExpr, X);
        this.rest = rest_testclause;
    }
}
exports.ASTNodeTestClause = ASTNodeTestClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVRlc3RDbGF1c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVUZXN0Q2xhdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBb0M7QUFDcEMsK0NBQTRDO0FBQzVDLHVEQUFvRDtBQUNwRCxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxpQkFBa0IsU0FBUSxpQkFBTztJQU01QyxZQUFZLFVBQXVCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQU5iLFNBQUksR0FBa0MseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQU96RSxXQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQixNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxlQUFlLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxJQUFJLENBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxDQUFDLEdBQUcscUJBQVMsQ0FBQyxpQ0FBZSxFQUFFLENBQUMsQ0FBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO0lBQzlCLENBQUM7Q0FDRjtBQWZELDhDQWVDIn0=