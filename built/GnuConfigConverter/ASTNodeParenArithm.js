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
class ASTNodeParenArithm extends ASTNode_1.ASTNode {
    constructor(parenarithm) {
        super(parenarithm);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeParenArithm;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeParenArithm];
        logg_1.logg("ASTNodeParenArithm");
        this.Lparen = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, parenarithm.Lparen);
        this.Rparen = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, parenarithm.Rparen);
        this.X = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, parenarithm.X);
    }
}
exports.ASTNodeParenArithm = ASTNodeParenArithm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVBhcmVuQXJpdGhtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlUGFyZW5Bcml0aG0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHVDQUFvQztBQUNwQywyREFBd0Q7QUFDeEQsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUNsQyx1REFBb0Q7QUFDcEQsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUc5QixNQUFhLGtCQUFtQixTQUFRLGlCQUFPO0lBTzdDLFlBQVksV0FBeUI7UUFDbkMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBUGQsU0FBSSxHQUFtQyx5QkFBVyxDQUFDLGtCQUFrQixDQUFDO1FBQ3RFLGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQU90RSxXQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsQ0FBQyxHQUFHLHFCQUFTLENBQUMscUNBQWlCLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ3hELENBQUM7Q0FDRjtBQWRELGdEQWNDIn0=