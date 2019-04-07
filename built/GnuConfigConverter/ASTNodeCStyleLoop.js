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
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeCStyleLoop];
        logg_1.logg("ASTNodeCStyleLoop");
        this.Lparen = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, cstyleloop.Lparen);
        this.Rparen = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, cstyleloop.Rparen);
        this.Init = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, cstyleloop.Init);
        this.Cond = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, cstyleloop.Cond);
        this.Post = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, cstyleloop.Post);
    }
}
exports.ASTNodeCStyleLoop = ASTNodeCStyleLoop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNTdHlsZUxvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVDU3R5bGVMb29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBb0M7QUFDcEMsMkRBQXdEO0FBQ3hELCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxpQkFBa0IsU0FBUSxpQkFBTztJQVM1QyxZQUFZLFVBQXVCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQVRiLFNBQUksR0FBa0MseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQUNwRSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFTckUsV0FBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLHFDQUFpQixFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMscUNBQWlCLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyxxQ0FBaUIsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7SUFDN0QsQ0FBQztDQUNGO0FBbEJELDhDQWtCQyJ9