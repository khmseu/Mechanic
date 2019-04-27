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
    constructor(wordpart, parent, parentField) {
        super(wordpart, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        // tslint:disable-next-line:max-line-length
        this.kind = ASTnodeKind_1.ASTnodeKind.bad;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.bad];
        logg_1.logg("ASTNodeWordPart");
        switch (mvdan_sh_1.syntax.NodeType(wordpart)) {
            case "Lit":
                return new ASTNodeLit_1.ASTNodeLit(wordpart, parent, parentField);
            case "SglQuoted":
                return new ASTNodeSglQuoted_1.ASTNodeSglQuoted(wordpart, parent, parentField);
            case "DblQuoted":
                return new ASTNodeDblQuoted_1.ASTNodeDblQuoted(wordpart, parent, parentField);
            case "ParamExp":
                return new ASTNodeParamExp_1.ASTNodeParamExp(wordpart, parent, parentField);
            case "CmdSubst":
                return new ASTNodeCmdSubst_1.ASTNodeCmdSubst(wordpart, parent, parentField);
            case "ArithmExp":
                return new ASTNodeArithmExp_1.ASTNodeArithmExp(wordpart, parent, parentField);
            case "ProcSubst":
                return new ASTNodeProcSubst_1.ASTNodeProcSubst(wordpart, parent, parentField);
            case "ExtGlob":
                return new ASTNodeExtGlob_1.ASTNodeExtGlob(wordpart, parent, parentField);
            case "BraceExp":
                return new ASTNodeBraceExp_1.ASTNodeBraceExp(wordpart, parent, parentField);
            default:
                throw { NodeType: mvdan_sh_1.syntax.NodeType(wordpart) };
        }
    }
}
exports.ASTNodeWordPart = ASTNodeWordPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVdvcmRQYXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlV29yZFBhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHVDQUFrQztBQUNsQyx1Q0FBb0M7QUFDcEMseURBQXNEO0FBQ3RELHVEQUFvRDtBQUNwRCx1REFBb0Q7QUFDcEQseURBQXNEO0FBQ3RELHFEQUFrRDtBQUNsRCwrQ0FBNEM7QUFDNUMsNkNBQTBDO0FBQzFDLHVEQUFvRDtBQUNwRCx5REFBc0Q7QUFDdEQseURBQXNEO0FBQ3RELGlDQUE4QjtBQUk5QixNQUFhLGVBQWdCLFNBQVEsaUJBQU87SUFJMUMsWUFBWSxRQUFtQixFQUFTLE1BQXNCLEVBQVMsV0FBbUI7UUFDeEYsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFEQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBSDFGLDJDQUEyQztRQUNwQyxTQUFJLEdBQWdTLHlCQUFXLENBQUMsR0FBRyxDQUFDO1FBQ3BULGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFHdkQsV0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEIsUUFBUSxpQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqQyxLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxJQUFJLHVCQUFVLENBQUMsUUFBZ0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDL0QsS0FBSyxXQUFXO2dCQUNkLE9BQU8sSUFBSSxtQ0FBZ0IsQ0FBQyxRQUFzQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUMzRSxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLG1DQUFnQixDQUFDLFFBQXNCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzNFLEtBQUssVUFBVTtnQkFDYixPQUFPLElBQUksaUNBQWUsQ0FBQyxRQUFxQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN6RSxLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxJQUFJLGlDQUFlLENBQUMsUUFBcUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDekUsS0FBSyxXQUFXO2dCQUNkLE9BQU8sSUFBSSxtQ0FBZ0IsQ0FBQyxRQUFzQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUMzRSxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLG1DQUFnQixDQUFDLFFBQXNCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzNFLEtBQUssU0FBUztnQkFDWixPQUFPLElBQUksK0JBQWMsQ0FBQyxRQUFvQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN2RSxLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxJQUFJLGlDQUFlLENBQUMsUUFBcUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDekU7Z0JBQ0UsTUFBTSxFQUFFLFFBQVEsRUFBRSxpQkFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztDQUNGO0FBOUJELDBDQThCQyJ9