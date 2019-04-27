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
const ASTNodeBinaryTest_1 = require("./ASTNodeBinaryTest");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeParenTest_1 = require("./ASTNodeParenTest");
const ASTNodeUnaryTest_1 = require("./ASTNodeUnaryTest");
const ASTNodeWord_1 = require("./ASTNodeWord");
const logg_1 = require("./logg");
class ASTNodeTestExpr extends ASTNode_1.ASTNode {
    constructor(testexpr, parent, parentField) {
        super(testexpr, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        // tslint:disable-next-line:max-line-length
        this.kind = ASTnodeKind_1.ASTnodeKind.bad;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.bad];
        logg_1.logg("ASTNodeTestExpr");
        switch (mvdan_sh_1.syntax.NodeType(testexpr)) {
            case "BinaryTest":
                return new ASTNodeBinaryTest_1.ASTNodeBinaryTest(testexpr, parent, parentField);
            case "UnaryTest":
                return new ASTNodeUnaryTest_1.ASTNodeUnaryTest(testexpr, parent, parentField);
            case "ParenTest":
                return new ASTNodeParenTest_1.ASTNodeParenTest(testexpr, parent, parentField);
            case "Word":
                return new ASTNodeWord_1.ASTNodeWord(testexpr, parent, parentField);
            default:
                throw { NodeType: mvdan_sh_1.syntax.NodeType(testexpr) };
        }
    }
}
exports.ASTNodeTestExpr = ASTNodeTestExpr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVRlc3RFeHByLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlVGVzdEV4cHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHVDQUFrQztBQUNsQyx1Q0FBb0M7QUFDcEMsMkRBQXdEO0FBQ3hELCtDQUE0QztBQUM1Qyx5REFBc0Q7QUFDdEQseURBQXNEO0FBQ3RELCtDQUE0QztBQUM1QyxpQ0FBOEI7QUFHOUIsTUFBYSxlQUFnQixTQUFRLGlCQUFPO0lBSTFDLFlBQVksUUFBbUIsRUFBUyxNQUFzQixFQUFTLFdBQW1CO1FBQ3hGLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBREMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUgxRiwyQ0FBMkM7UUFDcEMsU0FBSSxHQUE0SSx5QkFBVyxDQUFDLEdBQUcsQ0FBQztRQUNoSyxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBR3ZELFdBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hCLFFBQVEsaUJBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakMsS0FBSyxZQUFZO2dCQUNmLE9BQU8sSUFBSSxxQ0FBaUIsQ0FBQyxRQUF1QixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM3RSxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLG1DQUFnQixDQUFDLFFBQXNCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzNFLEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksbUNBQWdCLENBQUMsUUFBc0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDM0UsS0FBSyxNQUFNO2dCQUNULE9BQU8sSUFBSSx5QkFBVyxDQUFDLFFBQWlCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2pFO2dCQUNFLE1BQU0sRUFBRSxRQUFRLEVBQUUsaUJBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztTQUNqRDtJQUNILENBQUM7Q0FDRjtBQXBCRCwwQ0FvQkMifQ==