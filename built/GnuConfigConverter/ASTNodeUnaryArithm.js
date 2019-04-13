"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTMoreUnaryArithm_1 = require("./ASTMoreUnaryArithm");
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
        this.more = new ASTMoreUnaryArithm_1.ASTMoreUnaryArithm();
        logg_1.logg("ASTNodeUnaryArithm");
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, unaryarithm.OpPos);
        this.Op = ParserTypes_1.UnAritOperator[unaryarithm.Op];
        this.OpString = Token_1.op(unaryarithm.Op);
        this.Post = unaryarithm.Post;
        this.X = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, unaryarithm.X);
        ["OpPos"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitASTNodeUnaryArithmPre(this);
        this.X.accept(visitor);
        visitor.visitASTNodeUnaryArithmPost(this);
    }
}
exports.ASTNodeUnaryArithm = ASTNodeUnaryArithm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVVuYXJ5QXJpdGhtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlVW5hcnlBcml0aG0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILDZEQUEwRDtBQUMxRCx1Q0FBb0M7QUFDcEMsMkRBQXdEO0FBQ3hELCtDQUE0QztBQUU1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFDOUIsK0NBQTZEO0FBQzdELG1DQUFvQztBQUVwQyxNQUFhLGtCQUFtQixTQUFRLGlCQUFPO0lBVTdDLFlBQVksV0FBeUI7UUFDbkMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBVmQsU0FBSSxHQUFtQyx5QkFBVyxDQUFDLGtCQUFrQixDQUFDO1FBQ3RFLGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqRSxTQUFJLEdBQXVCLElBQUksdUNBQWtCLEVBQUUsQ0FBQztRQVN6RCxXQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsRUFBRSxHQUFHLDRCQUFjLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBRSxDQUFFLFdBQVcsQ0FBQyxFQUF1QixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxDQUFDLEdBQUcscUJBQVMsQ0FBQyxxQ0FBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFFLENBQUM7UUFDdEQsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN0QixNQUFNLElBQUksR0FBdUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLE9BQXVCO1FBQ25DLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBN0JELGdEQTZCQyJ9