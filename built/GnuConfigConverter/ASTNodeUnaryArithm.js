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
const ParserTypes_1 = require("./ParserTypes");
const Token_1 = require("./Token");
class ASTNodeUnaryArithm extends ASTNode_1.ASTNode {
    constructor(unaryarithm) {
        super(unaryarithm);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeUnaryArithm;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeUnaryArithm];
        logg_1.logg("ASTNodeUnaryArithm");
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, unaryarithm.OpPos);
        this.Op = ParserTypes_1.UnAritOperator[unaryarithm.Op];
        this.OpString = Token_1.op(unaryarithm.Op);
        this.Post = unaryarithm.Post;
        this.X = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, unaryarithm.X);
    }
}
exports.ASTNodeUnaryArithm = ASTNodeUnaryArithm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVVuYXJ5QXJpdGhtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlVW5hcnlBcml0aG0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHVDQUFvQztBQUNwQywyREFBd0Q7QUFDeEQsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUNsQyx1REFBb0Q7QUFDcEQsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUM5QiwrQ0FBNkQ7QUFDN0QsbUNBQW9DO0FBRXBDLE1BQWEsa0JBQW1CLFNBQVEsaUJBQU87SUFTN0MsWUFBWSxXQUF5QjtRQUNuQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFUZCxTQUFJLEdBQW1DLHlCQUFXLENBQUMsa0JBQWtCLENBQUM7UUFDdEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBU3RFLFdBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxFQUFFLEdBQUcsNEJBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFFLENBQUUsV0FBVyxDQUFDLEVBQXVCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLHFDQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUN4RCxDQUFDO0NBQ0Y7QUFsQkQsZ0RBa0JDIn0=