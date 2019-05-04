"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
        logg_1.logg("ASTNodeArithmExpr");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUFyaXRobUV4cHIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2dlbmVyYXRlZC9BU1ROb2RlQXJpdGhtRXhwci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQWtDO0FBQ2xDLGtDQUErQjtBQUUvQix1Q0FBb0M7QUFDcEMsK0RBQTREO0FBQzVELCtDQUE0QztBQUM1Qyw2REFBMEQ7QUFDMUQsNkRBQTBEO0FBQzFELCtDQUE0QztBQUU1QyxNQUFhLGlCQUFrQixTQUFRLGlCQUFPO0lBSTVDLFlBQVksVUFBdUIsRUFBUyxNQUFzQixFQUFTLFdBQW1CO1FBQzVGLEtBQUssQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBREcsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUg5RiwyQ0FBMkM7UUFDcEMsU0FBSSxHQUFrSix5QkFBVyxDQUFDLEdBQUcsQ0FBQztRQUN0SyxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBR3ZELFdBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzFCLFFBQVEsaUJBQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDbkMsS0FBSyxjQUFjO2dCQUNqQixPQUFPLElBQUkseUNBQW1CLENBQUMsVUFBMkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDbkYsS0FBSyxhQUFhO2dCQUNoQixPQUFPLElBQUksdUNBQWtCLENBQUMsVUFBMEIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDakYsS0FBSyxhQUFhO2dCQUNoQixPQUFPLElBQUksdUNBQWtCLENBQUMsVUFBMEIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDakYsS0FBSyxNQUFNO2dCQUNULE9BQU8sSUFBSSx5QkFBVyxDQUFDLFVBQW1CLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ25FO2dCQUNFLE1BQU0sRUFBRSxRQUFRLEVBQUUsaUJBQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztTQUNuRDtJQUNILENBQUM7Q0FDRjtBQXBCRCw4Q0FvQkMifQ==