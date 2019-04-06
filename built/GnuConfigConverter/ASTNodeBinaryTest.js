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
class ASTNodeBinaryTest extends ASTNode_1.ASTNode {
    constructor(binarytest) {
        super(binarytest);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeBinaryTest;
        logg_1.logg("ASTNodeBinaryTest");
        const { OpPos, Op, X, Y, ...rest_binarytest } = binarytest;
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, OpPos);
        this.Op = Op;
        this.X = ASTSingle_1.ASTSingle(ASTNodeTestExpr_1.ASTNodeTestExpr, X);
        this.Y = ASTSingle_1.ASTSingle(ASTNodeTestExpr_1.ASTNodeTestExpr, Y);
        this.rest = rest_binarytest;
    }
}
exports.ASTNodeBinaryTest = ASTNodeBinaryTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUJpbmFyeVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVCaW5hcnlUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBb0M7QUFDcEMsK0NBQTRDO0FBQzVDLHVEQUFvRDtBQUNwRCxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxpQkFBa0IsU0FBUSxpQkFBTztJQU81QyxZQUFZLFVBQXVCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQVBiLFNBQUksR0FBa0MseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQVF6RSxXQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQixNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsZUFBZSxFQUFFLEdBQUcsVUFBVSxDQUFDO1FBQzNELElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsQ0FBQyxHQUFHLHFCQUFTLENBQUMsaUNBQWUsRUFBRSxDQUFDLENBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsQ0FBQyxHQUFHLHFCQUFTLENBQUMsaUNBQWUsRUFBRSxDQUFDLENBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFqQkQsOENBaUJDIn0=