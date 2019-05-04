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
const ASTNodeArithmCmd_1 = require("./ASTNodeArithmCmd");
const ASTNodeBinaryCmd_1 = require("./ASTNodeBinaryCmd");
const ASTNodeBlock_1 = require("./ASTNodeBlock");
const ASTNodeCallExpr_1 = require("./ASTNodeCallExpr");
const ASTNodeCaseClause_1 = require("./ASTNodeCaseClause");
const ASTNodeCoprocClause_1 = require("./ASTNodeCoprocClause");
const ASTNodeDeclClause_1 = require("./ASTNodeDeclClause");
const ASTNodeForClause_1 = require("./ASTNodeForClause");
const ASTNodeFuncDecl_1 = require("./ASTNodeFuncDecl");
const ASTNodeIfClause_1 = require("./ASTNodeIfClause");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLetClause_1 = require("./ASTNodeLetClause");
const ASTNodeSubshell_1 = require("./ASTNodeSubshell");
const ASTNodeTestClause_1 = require("./ASTNodeTestClause");
const ASTNodeTimeClause_1 = require("./ASTNodeTimeClause");
const ASTNodeWhileClause_1 = require("./ASTNodeWhileClause");
class ASTNodeCommand extends ASTNode_1.ASTNode {
    constructor(command, parent, parentField) {
        super(command, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        // tslint:disable-next-line:max-line-length
        this.kind = ASTnodeKind_1.ASTnodeKind.bad;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.bad];
        logg_1.logg("ASTNodeCommand");
        switch (mvdan_sh_1.syntax.NodeType(command)) {
            case "CallExpr":
                return new ASTNodeCallExpr_1.ASTNodeCallExpr(command, parent, parentField);
            case "IfClause":
                return new ASTNodeIfClause_1.ASTNodeIfClause(command, parent, parentField);
            case "WhileClause":
                return new ASTNodeWhileClause_1.ASTNodeWhileClause(command, parent, parentField);
            case "ForClause":
                return new ASTNodeForClause_1.ASTNodeForClause(command, parent, parentField);
            case "CaseClause":
                return new ASTNodeCaseClause_1.ASTNodeCaseClause(command, parent, parentField);
            case "Block":
                return new ASTNodeBlock_1.ASTNodeBlock(command, parent, parentField);
            case "Subshell":
                return new ASTNodeSubshell_1.ASTNodeSubshell(command, parent, parentField);
            case "BinaryCmd":
                return new ASTNodeBinaryCmd_1.ASTNodeBinaryCmd(command, parent, parentField);
            case "FuncDecl":
                return new ASTNodeFuncDecl_1.ASTNodeFuncDecl(command, parent, parentField);
            case "ArithmCmd":
                return new ASTNodeArithmCmd_1.ASTNodeArithmCmd(command, parent, parentField);
            case "TestClause":
                return new ASTNodeTestClause_1.ASTNodeTestClause(command, parent, parentField);
            case "DeclClause":
                return new ASTNodeDeclClause_1.ASTNodeDeclClause(command, parent, parentField);
            case "LetClause":
                return new ASTNodeLetClause_1.ASTNodeLetClause(command, parent, parentField);
            case "TimeClause":
                return new ASTNodeTimeClause_1.ASTNodeTimeClause(command, parent, parentField);
            case "CoprocClause":
                return new ASTNodeCoprocClause_1.ASTNodeCoprocClause(command, parent, parentField);
            default:
                throw { NodeType: mvdan_sh_1.syntax.NodeType(command) };
        }
    }
}
exports.ASTNodeCommand = ASTNodeCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2dlbmVyYXRlZC9BU1ROb2RlQ29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQWtDO0FBQ2xDLGtDQUErQjtBQUcvQix1Q0FBb0M7QUFDcEMseURBQXNEO0FBQ3RELHlEQUFzRDtBQUN0RCxpREFBOEM7QUFDOUMsdURBQW9EO0FBQ3BELDJEQUF3RDtBQUN4RCwrREFBNEQ7QUFDNUQsMkRBQXdEO0FBQ3hELHlEQUFzRDtBQUN0RCx1REFBb0Q7QUFDcEQsdURBQW9EO0FBQ3BELCtDQUE0QztBQUM1Qyx5REFBc0Q7QUFDdEQsdURBQW9EO0FBQ3BELDJEQUF3RDtBQUN4RCwyREFBd0Q7QUFDeEQsNkRBQTBEO0FBRTFELE1BQWEsY0FBZSxTQUFRLGlCQUFPO0lBSXpDLFlBQVksT0FBaUIsRUFBUyxNQUFzQixFQUFTLFdBQW1CO1FBQ3RGLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBREEsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUh4RiwyQ0FBMkM7UUFDcEMsU0FBSSxHQUFzZSx5QkFBVyxDQUFDLEdBQUcsQ0FBQztRQUMxZixlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBR3ZELFdBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZCLFFBQVEsaUJBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEMsS0FBSyxVQUFVO2dCQUNiLE9BQU8sSUFBSSxpQ0FBZSxDQUFDLE9BQW9CLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3hFLEtBQUssVUFBVTtnQkFDYixPQUFPLElBQUksaUNBQWUsQ0FBQyxPQUFvQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN4RSxLQUFLLGFBQWE7Z0JBQ2hCLE9BQU8sSUFBSSx1Q0FBa0IsQ0FBQyxPQUF1QixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM5RSxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLG1DQUFnQixDQUFDLE9BQXFCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzFFLEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUkscUNBQWlCLENBQUMsT0FBc0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDNUUsS0FBSyxPQUFPO2dCQUNWLE9BQU8sSUFBSSwyQkFBWSxDQUFDLE9BQWlCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2xFLEtBQUssVUFBVTtnQkFDYixPQUFPLElBQUksaUNBQWUsQ0FBQyxPQUFvQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN4RSxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLG1DQUFnQixDQUFDLE9BQXFCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzFFLEtBQUssVUFBVTtnQkFDYixPQUFPLElBQUksaUNBQWUsQ0FBQyxPQUFvQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN4RSxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLG1DQUFnQixDQUFDLE9BQXFCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzFFLEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUkscUNBQWlCLENBQUMsT0FBc0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDNUUsS0FBSyxZQUFZO2dCQUNmLE9BQU8sSUFBSSxxQ0FBaUIsQ0FBQyxPQUFzQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM1RSxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLG1DQUFnQixDQUFDLE9BQXFCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzFFLEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUkscUNBQWlCLENBQUMsT0FBc0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDNUUsS0FBSyxjQUFjO2dCQUNqQixPQUFPLElBQUkseUNBQW1CLENBQUMsT0FBd0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDaEY7Z0JBQ0UsTUFBTSxFQUFFLFFBQVEsRUFBRSxpQkFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztDQUNGO0FBMUNELHdDQTBDQyJ9