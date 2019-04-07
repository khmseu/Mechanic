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
const ASTNodeStmt_1 = require("./ASTNodeStmt");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeTimeClause extends ASTNode_1.ASTNode {
    constructor(timeclause) {
        super(timeclause);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeTimeClause;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeTimeClause];
        logg_1.logg("ASTNodeTimeClause");
        this.Time = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, timeclause.Time);
        this.PosixFormat = timeclause.PosixFormat;
        this.Stmt = ASTSingle_1.ASTSingle(ASTNodeStmt_1.ASTNodeStmt, timeclause.Stmt);
    }
}
exports.ASTNodeTimeClause = ASTNodeTimeClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVRpbWVDbGF1c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVUaW1lQ2xhdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBb0M7QUFDcEMsK0NBQTRDO0FBQzVDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxpQkFBa0IsU0FBUSxpQkFBTztJQU81QyxZQUFZLFVBQXVCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQVBiLFNBQUksR0FBa0MseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQUNwRSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFPckUsV0FBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyx5QkFBVyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0Y7QUFkRCw4Q0FjQyJ9