"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTNodeArithmExpr = void 0;
const mvdan_sh_1 = require("mvdan-sh");
const logg_1 = require("../logg");
const ASTNode_1 = require("./ASTNode");
const ASTNodeBinaryArithm_1 = require("./ASTNodeBinaryArithm");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeParenArithm_1 = require("./ASTNodeParenArithm");
const ASTNodeUnaryArithm_1 = require("./ASTNodeUnaryArithm");
const ASTNodeWord_1 = require("./ASTNodeWord");
class ASTNodeArithmExpr extends ASTNode_1.ASTNode {
    constructor(arithmexpr, parent, parentField) {
        super(arithmexpr, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        // tslint:disable-next-line:max-line-length
        this.kind = ASTnodeKind_1.ASTnodeKind.bad;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.bad];
        (0, logg_1.logg)("ASTNodeArithmExpr");
        switch (mvdan_sh_1.syntax.NodeType(arithmexpr)) {
            case "BinaryArithm":
                return new ASTNodeBinaryArithm_1.ASTNodeBinaryArithm(arithmexpr, parent, parentField);
            case "UnaryArithm":
                return new ASTNodeUnaryArithm_1.ASTNodeUnaryArithm(arithmexpr, parent, parentField);
            case "ParenArithm":
                return new ASTNodeParenArithm_1.ASTNodeParenArithm(arithmexpr, parent, parentField);
            case "Word":
                return new ASTNodeWord_1.ASTNodeWord(arithmexpr, parent, parentField);
            default:
                throw { NodeType: mvdan_sh_1.syntax.NodeType(arithmexpr) };
        }
    }
}
exports.ASTNodeArithmExpr = ASTNodeArithmExpr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUFyaXRobUV4cHIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2dlbmVyYXRlZC9BU1ROb2RlQXJpdGhtRXhwci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7OztBQUVILHVDQUFrQztBQUNsQyxrQ0FBK0I7QUFFL0IsdUNBQW9DO0FBQ3BDLCtEQUE0RDtBQUM1RCwrQ0FBNEM7QUFDNUMsNkRBQTBEO0FBQzFELDZEQUEwRDtBQUMxRCwrQ0FBNEM7QUFFNUMsTUFBYSxpQkFBa0IsU0FBUSxpQkFBTztJQUk1QyxZQUFZLFVBQXVCLEVBQVMsTUFBc0IsRUFBUyxXQUFtQjtRQUM1RixLQUFLLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQURHLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFIOUYsMkNBQTJDO1FBQ3BDLFNBQUksR0FBa0oseUJBQVcsQ0FBQyxHQUFHLENBQUM7UUFDdEssZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUd2RCxJQUFBLFdBQUksRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzFCLFFBQVEsaUJBQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDbkMsS0FBSyxjQUFjO2dCQUNqQixPQUFPLElBQUkseUNBQW1CLENBQUMsVUFBMkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDbkYsS0FBSyxhQUFhO2dCQUNoQixPQUFPLElBQUksdUNBQWtCLENBQUMsVUFBMEIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDakYsS0FBSyxhQUFhO2dCQUNoQixPQUFPLElBQUksdUNBQWtCLENBQUMsVUFBMEIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDakYsS0FBSyxNQUFNO2dCQUNULE9BQU8sSUFBSSx5QkFBVyxDQUFDLFVBQW1CLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ25FO2dCQUNFLE1BQU0sRUFBRSxRQUFRLEVBQUUsaUJBQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztTQUNuRDtJQUNILENBQUM7Q0FDRjtBQXBCRCw4Q0FvQkMifQ==