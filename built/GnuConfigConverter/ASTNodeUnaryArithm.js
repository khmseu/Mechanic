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
class ASTNodeUnaryArithm extends ASTNode_1.ASTNode {
    constructor(unaryarithm) {
        super(unaryarithm);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeUnaryArithm;
        logg_1.logg("ASTNodeUnaryArithm");
        const { OpPos, Op, Post, X, ...rest_unaryarithm } = unaryarithm;
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, OpPos);
        this.Op = Op;
        this.Post = Post;
        this.X = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, X);
        this.rest = rest_unaryarithm;
    }
}
exports.ASTNodeUnaryArithm = ASTNodeUnaryArithm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVVuYXJ5QXJpdGhtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlVW5hcnlBcml0aG0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHVDQUFvQztBQUNwQywyREFBd0Q7QUFDeEQsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUNsQyx1REFBb0Q7QUFDcEQsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUc5QixNQUFhLGtCQUFtQixTQUFRLGlCQUFPO0lBTzdDLFlBQVksV0FBeUI7UUFDbkMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBUGQsU0FBSSxHQUFtQyx5QkFBVyxDQUFDLGtCQUFrQixDQUFDO1FBUTNFLFdBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxnQkFBZ0IsRUFBRSxHQUFHLFdBQVcsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLHFDQUFpQixFQUFFLENBQUMsQ0FBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBakJELGdEQWlCQyJ9