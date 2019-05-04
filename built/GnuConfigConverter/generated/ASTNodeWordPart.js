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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVdvcmRQYXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9nZW5lcmF0ZWQvQVNUTm9kZVdvcmRQYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBa0M7QUFDbEMsa0NBQStCO0FBRy9CLHVDQUFvQztBQUNwQyx5REFBc0Q7QUFDdEQsdURBQW9EO0FBQ3BELHVEQUFvRDtBQUNwRCx5REFBc0Q7QUFDdEQscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1Qyw2Q0FBMEM7QUFDMUMsdURBQW9EO0FBQ3BELHlEQUFzRDtBQUN0RCx5REFBc0Q7QUFFdEQsTUFBYSxlQUFnQixTQUFRLGlCQUFPO0lBSTFDLFlBQVksUUFBbUIsRUFBUyxNQUFzQixFQUFTLFdBQW1CO1FBQ3hGLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBREMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUgxRiwyQ0FBMkM7UUFDcEMsU0FBSSxHQUFnUyx5QkFBVyxDQUFDLEdBQUcsQ0FBQztRQUNwVCxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBR3ZELFdBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hCLFFBQVEsaUJBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakMsS0FBSyxLQUFLO2dCQUNSLE9BQU8sSUFBSSx1QkFBVSxDQUFDLFFBQWdCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQy9ELEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksbUNBQWdCLENBQUMsUUFBc0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDM0UsS0FBSyxXQUFXO2dCQUNkLE9BQU8sSUFBSSxtQ0FBZ0IsQ0FBQyxRQUFzQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUMzRSxLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxJQUFJLGlDQUFlLENBQUMsUUFBcUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDekUsS0FBSyxVQUFVO2dCQUNiLE9BQU8sSUFBSSxpQ0FBZSxDQUFDLFFBQXFCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3pFLEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksbUNBQWdCLENBQUMsUUFBc0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDM0UsS0FBSyxXQUFXO2dCQUNkLE9BQU8sSUFBSSxtQ0FBZ0IsQ0FBQyxRQUFzQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUMzRSxLQUFLLFNBQVM7Z0JBQ1osT0FBTyxJQUFJLCtCQUFjLENBQUMsUUFBb0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDdkUsS0FBSyxVQUFVO2dCQUNiLE9BQU8sSUFBSSxpQ0FBZSxDQUFDLFFBQXFCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3pFO2dCQUNFLE1BQU0sRUFBRSxRQUFRLEVBQUUsaUJBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztTQUNqRDtJQUNILENBQUM7Q0FDRjtBQTlCRCwwQ0E4QkMifQ==