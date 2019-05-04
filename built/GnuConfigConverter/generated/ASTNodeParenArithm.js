"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("../logg");
const ASTMoreParenArithm_1 = require("./ASTMoreParenArithm");
const ASTNode_1 = require("./ASTNode");
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
const ASTSingleNotNull_1 = require("./ASTSingleNotNull");
class ASTNodeParenArithm extends ASTNode_1.ASTNode {
    constructor(parenarithm, parent, parentField) {
        super(parenarithm, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeParenArithm;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeParenArithm];
        this.more = new ASTMoreParenArithm_1.ASTMoreParenArithm();
        logg_1.logg("ASTNodeParenArithm");
        this.Lparen = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, parenarithm.Lparen);
        this.Rparen = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, parenarithm.Rparen);
        this.X = ASTSingleNotNull_1.ASTSingleNotNull(ASTNodeArithmExpr_1.ASTNodeArithmExpr, parenarithm.X, this, "X");
        ["kind", "parent", "parentField", "Lparen", "Rparen"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPre(this);
        visitor.visitASTNodeParenArithmPre(this);
        this.X.accept(visitor);
        visitor.visitASTNodeParenArithmPost(this);
        visitor.visitAllPost(this);
    }
}
exports.ASTNodeParenArithm = ASTNodeParenArithm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVBhcmVuQXJpdGhtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9nZW5lcmF0ZWQvQVNUTm9kZVBhcmVuQXJpdGhtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxrQ0FBK0I7QUFFL0IsNkRBQTBEO0FBQzFELHVDQUFvQztBQUNwQywyREFBd0Q7QUFDeEQsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUNsQyxxRUFBa0U7QUFDbEUseURBQXNEO0FBR3RELE1BQWEsa0JBQW1CLFNBQVEsaUJBQU87SUFRN0MsWUFBWSxXQUF5QixFQUFTLE1BQXNCLEVBQVMsV0FBbUI7UUFDOUYsS0FBSyxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFESSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBUHpGLFNBQUksR0FBbUMseUJBQVcsQ0FBQyxrQkFBa0IsQ0FBQztRQUN0RSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDakUsU0FBSSxHQUF1QixJQUFJLHVDQUFrQixFQUFFLENBQUM7UUFPekQsV0FBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRywrQ0FBc0IsQ0FBQyxlQUFNLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxNQUFNLEdBQUcsK0NBQXNCLENBQUMsZUFBTSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsQ0FBQyxHQUFHLG1DQUFnQixDQUFDLHFDQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2xFLE1BQU0sSUFBSSxHQUF1QixNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxNQUFNLENBQUMsT0FBdUI7UUFDbkMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBM0JELGdEQTJCQyJ9