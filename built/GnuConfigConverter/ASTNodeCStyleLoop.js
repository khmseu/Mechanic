"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTNode_1 = require("./ASTNode");
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeCStyleLoop extends ASTNode_1.ASTNode {
    constructor(cstyleloop) {
        super(cstyleloop);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeCStyleLoop;
        logg_1.logg("ASTNodeCStyleLoop");
        const { Lparen, Rparen, Init, Cond, Post, ...rest_cstyleloop } = cstyleloop;
        this.Lparen = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Lparen);
        this.Rparen = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Rparen);
        this.Init = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, Init);
        this.Cond = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, Cond);
        this.Post = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, Post);
        this.rest = rest_cstyleloop;
    }
}
exports.ASTNodeCStyleLoop = ASTNodeCStyleLoop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNTdHlsZUxvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVDU3R5bGVMb29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBb0M7QUFDcEMsMkRBQXdEO0FBQ3hELCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxpQkFBa0IsU0FBUSxpQkFBTztJQVE1QyxZQUFZLFVBQXVCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQVJiLFNBQUksR0FBa0MseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQVN6RSxXQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQixNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLGVBQWUsRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUM1RSxJQUFJLENBQUMsTUFBTSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLE1BQU0sQ0FBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsTUFBTSxDQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLHFDQUFpQixFQUFFLElBQUksQ0FBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyxxQ0FBaUIsRUFBRSxJQUFJLENBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMscUNBQWlCLEVBQUUsSUFBSSxDQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7SUFDOUIsQ0FBQztDQUNGO0FBbkJELDhDQW1CQyJ9