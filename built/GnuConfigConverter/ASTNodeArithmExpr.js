"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mvdan_sh_1 = require("mvdan-sh");
const ASTNode_1 = require("./ASTNode");
const ASTNodeBinaryArithm_1 = require("./ASTNodeBinaryArithm");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeParenArithm_1 = require("./ASTNodeParenArithm");
const ASTNodeUnaryArithm_1 = require("./ASTNodeUnaryArithm");
const ASTNodeWord_1 = require("./ASTNodeWord");
const logg_1 = require("./logg");
class ASTNodeArithmExpr extends ASTNode_1.ASTNode {
    constructor(arithmexpr) {
        super(arithmexpr);
        // tslint:disable-next-line:max-line-length
        this.kind = ASTnodeKind_1.ASTnodeKind.bad;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.bad];
        logg_1.logg("ASTNodeArithmExpr");
        switch (mvdan_sh_1.syntax.NodeType(arithmexpr)) {
            case "BinaryArithm":
                return new ASTNodeBinaryArithm_1.ASTNodeBinaryArithm(arithmexpr);
            case "UnaryArithm":
                return new ASTNodeUnaryArithm_1.ASTNodeUnaryArithm(arithmexpr);
            case "ParenArithm":
                return new ASTNodeParenArithm_1.ASTNodeParenArithm(arithmexpr);
            case "Word":
                return new ASTNodeWord_1.ASTNodeWord(arithmexpr);
            default:
                throw { NodeType: mvdan_sh_1.syntax.NodeType(arithmexpr) };
        }
    }
}
exports.ASTNodeArithmExpr = ASTNodeArithmExpr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUFyaXRobUV4cHIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVBcml0aG1FeHByLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBa0M7QUFDbEMsdUNBQW9DO0FBQ3BDLCtEQUE0RDtBQUM1RCwrQ0FBNEM7QUFDNUMsNkRBQTBEO0FBQzFELDZEQUEwRDtBQUMxRCwrQ0FBNEM7QUFDNUMsaUNBQThCO0FBRzlCLE1BQWEsaUJBQWtCLFNBQVEsaUJBQU87SUFJNUMsWUFBWSxVQUF1QjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFKcEIsMkNBQTJDO1FBQ3BDLFNBQUksR0FBa0oseUJBQVcsQ0FBQyxHQUFHLENBQUM7UUFDdEssZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUd2RCxXQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQixRQUFRLGlCQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25DLEtBQUssY0FBYztnQkFDakIsT0FBTyxJQUFJLHlDQUFtQixDQUFDLFVBQTJCLENBQUMsQ0FBQztZQUM5RCxLQUFLLGFBQWE7Z0JBQ2hCLE9BQU8sSUFBSSx1Q0FBa0IsQ0FBQyxVQUEwQixDQUFDLENBQUM7WUFDNUQsS0FBSyxhQUFhO2dCQUNoQixPQUFPLElBQUksdUNBQWtCLENBQUMsVUFBMEIsQ0FBQyxDQUFDO1lBQzVELEtBQUssTUFBTTtnQkFDVCxPQUFPLElBQUkseUJBQVcsQ0FBQyxVQUFtQixDQUFDLENBQUM7WUFDOUM7Z0JBQ0UsTUFBTSxFQUFFLFFBQVEsRUFBRSxpQkFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztDQUNGO0FBcEJELDhDQW9CQyJ9