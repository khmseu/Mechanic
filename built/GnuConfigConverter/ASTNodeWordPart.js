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
const ASTNodeArithmExp_1 = require("./ASTNodeArithmExp");
const ASTNodeBraceExp_1 = require("./ASTNodeBraceExp");
const ASTNodeCmdSubst_1 = require("./ASTNodeCmdSubst");
const ASTNodeDblQuoted_1 = require("./ASTNodeDblQuoted");
const ASTNodeExtGlob_1 = require("./ASTNodeExtGlob");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLit_1 = require("./ASTNodeLit");
const ASTNodeParamExp_1 = require("./ASTNodeParamExp");
const ASTNodeProcSubst_1 = require("./ASTNodeProcSubst");
const ASTNodeSglQuoted_1 = require("./ASTNodeSglQuoted");
const logg_1 = require("./logg");
class ASTNodeWordPart extends ASTNode_1.ASTNode {
    constructor(wordpart) {
        super(wordpart);
        // tslint:disable-next-line:max-line-length
        this.kind = ASTnodeKind_1.ASTnodeKind.bad;
        logg_1.logg("ASTNodeWordPart");
        switch (mvdan_sh_1.syntax.NodeType(wordpart)) {
            case "Lit":
                return new ASTNodeLit_1.ASTNodeLit(wordpart);
            case "SglQuoted":
                return new ASTNodeSglQuoted_1.ASTNodeSglQuoted(wordpart);
            case "DblQuoted":
                return new ASTNodeDblQuoted_1.ASTNodeDblQuoted(wordpart);
            case "ParamExp":
                return new ASTNodeParamExp_1.ASTNodeParamExp(wordpart);
            case "CmdSubst":
                return new ASTNodeCmdSubst_1.ASTNodeCmdSubst(wordpart);
            case "ArithmExp":
                return new ASTNodeArithmExp_1.ASTNodeArithmExp(wordpart);
            case "ProcSubst":
                return new ASTNodeProcSubst_1.ASTNodeProcSubst(wordpart);
            case "ExtGlob":
                return new ASTNodeExtGlob_1.ASTNodeExtGlob(wordpart);
            case "BraceExp":
                return new ASTNodeBraceExp_1.ASTNodeBraceExp(wordpart);
            default:
                this.rest = { NodeType: mvdan_sh_1.syntax.NodeType(wordpart) };
        }
    }
}
exports.ASTNodeWordPart = ASTNodeWordPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVdvcmRQYXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlV29yZFBhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHVDQUFrQztBQUNsQyx1Q0FBb0M7QUFDcEMseURBQXNEO0FBQ3RELHVEQUFvRDtBQUNwRCx1REFBb0Q7QUFDcEQseURBQXNEO0FBQ3RELHFEQUFrRDtBQUNsRCwrQ0FBNEM7QUFDNUMsNkNBQTBDO0FBQzFDLHVEQUFvRDtBQUNwRCx5REFBc0Q7QUFDdEQseURBQXNEO0FBQ3RELGlDQUE4QjtBQUk5QixNQUFhLGVBQWdCLFNBQVEsaUJBQU87SUFHMUMsWUFBWSxRQUFtQjtRQUM3QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFIbEIsMkNBQTJDO1FBQ3BDLFNBQUksR0FBZ1MseUJBQVcsQ0FBQyxHQUFHLENBQUM7UUFHelQsV0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEIsUUFBUSxpQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqQyxLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxJQUFJLHVCQUFVLENBQUMsUUFBZ0IsQ0FBQyxDQUFDO1lBQzFDLEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksbUNBQWdCLENBQUMsUUFBc0IsQ0FBQyxDQUFDO1lBQ3RELEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksbUNBQWdCLENBQUMsUUFBc0IsQ0FBQyxDQUFDO1lBQ3RELEtBQUssVUFBVTtnQkFDYixPQUFPLElBQUksaUNBQWUsQ0FBQyxRQUFxQixDQUFDLENBQUM7WUFDcEQsS0FBSyxVQUFVO2dCQUNiLE9BQU8sSUFBSSxpQ0FBZSxDQUFDLFFBQXFCLENBQUMsQ0FBQztZQUNwRCxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLG1DQUFnQixDQUFDLFFBQXNCLENBQUMsQ0FBQztZQUN0RCxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLG1DQUFnQixDQUFDLFFBQXNCLENBQUMsQ0FBQztZQUN0RCxLQUFLLFNBQVM7Z0JBQ1osT0FBTyxJQUFJLCtCQUFjLENBQUMsUUFBb0IsQ0FBQyxDQUFDO1lBQ2xELEtBQUssVUFBVTtnQkFDYixPQUFPLElBQUksaUNBQWUsQ0FBQyxRQUFxQixDQUFDLENBQUM7WUFDcEQ7Z0JBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLFFBQVEsRUFBRSxpQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztDQUNGO0FBN0JELDBDQTZCQyJ9