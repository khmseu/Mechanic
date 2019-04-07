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
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.bad];
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
                throw { NodeType: mvdan_sh_1.syntax.NodeType(wordpart) };
        }
    }
}
exports.ASTNodeWordPart = ASTNodeWordPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVdvcmRQYXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlV29yZFBhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHVDQUFrQztBQUNsQyx1Q0FBb0M7QUFDcEMseURBQXNEO0FBQ3RELHVEQUFvRDtBQUNwRCx1REFBb0Q7QUFDcEQseURBQXNEO0FBQ3RELHFEQUFrRDtBQUNsRCwrQ0FBNEM7QUFDNUMsNkNBQTBDO0FBQzFDLHVEQUFvRDtBQUNwRCx5REFBc0Q7QUFDdEQseURBQXNEO0FBQ3RELGlDQUE4QjtBQUk5QixNQUFhLGVBQWdCLFNBQVEsaUJBQU87SUFJMUMsWUFBWSxRQUFtQjtRQUM3QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFKbEIsMkNBQTJDO1FBQ3BDLFNBQUksR0FBZ1MseUJBQVcsQ0FBQyxHQUFHLENBQUM7UUFDcFQsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUd2RCxXQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QixRQUFRLGlCQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2pDLEtBQUssS0FBSztnQkFDUixPQUFPLElBQUksdUJBQVUsQ0FBQyxRQUFnQixDQUFDLENBQUM7WUFDMUMsS0FBSyxXQUFXO2dCQUNkLE9BQU8sSUFBSSxtQ0FBZ0IsQ0FBQyxRQUFzQixDQUFDLENBQUM7WUFDdEQsS0FBSyxXQUFXO2dCQUNkLE9BQU8sSUFBSSxtQ0FBZ0IsQ0FBQyxRQUFzQixDQUFDLENBQUM7WUFDdEQsS0FBSyxVQUFVO2dCQUNiLE9BQU8sSUFBSSxpQ0FBZSxDQUFDLFFBQXFCLENBQUMsQ0FBQztZQUNwRCxLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxJQUFJLGlDQUFlLENBQUMsUUFBcUIsQ0FBQyxDQUFDO1lBQ3BELEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksbUNBQWdCLENBQUMsUUFBc0IsQ0FBQyxDQUFDO1lBQ3RELEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksbUNBQWdCLENBQUMsUUFBc0IsQ0FBQyxDQUFDO1lBQ3RELEtBQUssU0FBUztnQkFDWixPQUFPLElBQUksK0JBQWMsQ0FBQyxRQUFvQixDQUFDLENBQUM7WUFDbEQsS0FBSyxVQUFVO2dCQUNiLE9BQU8sSUFBSSxpQ0FBZSxDQUFDLFFBQXFCLENBQUMsQ0FBQztZQUNwRDtnQkFDRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGlCQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7U0FDakQ7SUFDSCxDQUFDO0NBQ0Y7QUE5QkQsMENBOEJDIn0=