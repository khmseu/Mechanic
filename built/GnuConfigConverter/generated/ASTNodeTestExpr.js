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
const ASTNodeBinaryTest_1 = require("./ASTNodeBinaryTest");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeParenTest_1 = require("./ASTNodeParenTest");
const ASTNodeUnaryTest_1 = require("./ASTNodeUnaryTest");
const ASTNodeWord_1 = require("./ASTNodeWord");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVRlc3RFeHByLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9nZW5lcmF0ZWQvQVNUTm9kZVRlc3RFeHByLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBa0M7QUFDbEMsa0NBQStCO0FBRS9CLHVDQUFvQztBQUNwQywyREFBd0Q7QUFDeEQsK0NBQTRDO0FBQzVDLHlEQUFzRDtBQUN0RCx5REFBc0Q7QUFDdEQsK0NBQTRDO0FBRTVDLE1BQWEsZUFBZ0IsU0FBUSxpQkFBTztJQUkxQyxZQUFZLFFBQW1CLEVBQVMsTUFBc0IsRUFBUyxXQUFtQjtRQUN4RixLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQURDLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFIMUYsMkNBQTJDO1FBQ3BDLFNBQUksR0FBNEkseUJBQVcsQ0FBQyxHQUFHLENBQUM7UUFDaEssZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUd2RCxXQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QixRQUFRLGlCQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2pDLEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUkscUNBQWlCLENBQUMsUUFBdUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDN0UsS0FBSyxXQUFXO2dCQUNkLE9BQU8sSUFBSSxtQ0FBZ0IsQ0FBQyxRQUFzQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUMzRSxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLG1DQUFnQixDQUFDLFFBQXNCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzNFLEtBQUssTUFBTTtnQkFDVCxPQUFPLElBQUkseUJBQVcsQ0FBQyxRQUFpQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNqRTtnQkFDRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGlCQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7U0FDakQ7SUFDSCxDQUFDO0NBQ0Y7QUFwQkQsMENBb0JDIn0=