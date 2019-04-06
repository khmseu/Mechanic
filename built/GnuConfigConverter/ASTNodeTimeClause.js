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
        logg_1.logg("ASTNodeTimeClause");
        const { Time, PosixFormat, Stmt, ...rest_timeclause } = timeclause;
        this.Time = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Time);
        this.PosixFormat = PosixFormat;
        this.Stmt = ASTSingle_1.ASTSingle(ASTNodeStmt_1.ASTNodeStmt, Stmt);
        this.rest = rest_timeclause;
    }
}
exports.ASTNodeTimeClause = ASTNodeTimeClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVRpbWVDbGF1c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVUaW1lQ2xhdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBb0M7QUFDcEMsK0NBQTRDO0FBQzVDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxpQkFBa0IsU0FBUSxpQkFBTztJQU01QyxZQUFZLFVBQXVCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQU5iLFNBQUksR0FBa0MseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQU96RSxXQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQixNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsR0FBRyxlQUFlLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxJQUFJLENBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMseUJBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFmRCw4Q0FlQyJ9