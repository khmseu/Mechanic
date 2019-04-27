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
const logg_1 = require("./logg");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBa0M7QUFDbEMsdUNBQW9DO0FBQ3BDLHlEQUFzRDtBQUN0RCx5REFBc0Q7QUFDdEQsaURBQThDO0FBQzlDLHVEQUFvRDtBQUNwRCwyREFBd0Q7QUFDeEQsK0RBQTREO0FBQzVELDJEQUF3RDtBQUN4RCx5REFBc0Q7QUFDdEQsdURBQW9EO0FBQ3BELHVEQUFvRDtBQUNwRCwrQ0FBNEM7QUFDNUMseURBQXNEO0FBQ3RELHVEQUFvRDtBQUNwRCwyREFBd0Q7QUFDeEQsMkRBQXdEO0FBQ3hELDZEQUEwRDtBQUMxRCxpQ0FBOEI7QUFJOUIsTUFBYSxjQUFlLFNBQVEsaUJBQU87SUFJekMsWUFBWSxPQUFpQixFQUFTLE1BQXNCLEVBQVMsV0FBbUI7UUFDdEYsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFEQSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBSHhGLDJDQUEyQztRQUNwQyxTQUFJLEdBQXNlLHlCQUFXLENBQUMsR0FBRyxDQUFDO1FBQzFmLGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFHdkQsV0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdkIsUUFBUSxpQkFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoQyxLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxJQUFJLGlDQUFlLENBQUMsT0FBb0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDeEUsS0FBSyxVQUFVO2dCQUNiLE9BQU8sSUFBSSxpQ0FBZSxDQUFDLE9BQW9CLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3hFLEtBQUssYUFBYTtnQkFDaEIsT0FBTyxJQUFJLHVDQUFrQixDQUFDLE9BQXVCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzlFLEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksbUNBQWdCLENBQUMsT0FBcUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDMUUsS0FBSyxZQUFZO2dCQUNmLE9BQU8sSUFBSSxxQ0FBaUIsQ0FBQyxPQUFzQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM1RSxLQUFLLE9BQU87Z0JBQ1YsT0FBTyxJQUFJLDJCQUFZLENBQUMsT0FBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDbEUsS0FBSyxVQUFVO2dCQUNiLE9BQU8sSUFBSSxpQ0FBZSxDQUFDLE9BQW9CLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3hFLEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksbUNBQWdCLENBQUMsT0FBcUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDMUUsS0FBSyxVQUFVO2dCQUNiLE9BQU8sSUFBSSxpQ0FBZSxDQUFDLE9BQW9CLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3hFLEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksbUNBQWdCLENBQUMsT0FBcUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDMUUsS0FBSyxZQUFZO2dCQUNmLE9BQU8sSUFBSSxxQ0FBaUIsQ0FBQyxPQUFzQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM1RSxLQUFLLFlBQVk7Z0JBQ2YsT0FBTyxJQUFJLHFDQUFpQixDQUFDLE9BQXNCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzVFLEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksbUNBQWdCLENBQUMsT0FBcUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDMUUsS0FBSyxZQUFZO2dCQUNmLE9BQU8sSUFBSSxxQ0FBaUIsQ0FBQyxPQUFzQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM1RSxLQUFLLGNBQWM7Z0JBQ2pCLE9BQU8sSUFBSSx5Q0FBbUIsQ0FBQyxPQUF3QixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNoRjtnQkFDRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGlCQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0NBQ0Y7QUExQ0Qsd0NBMENDIn0=