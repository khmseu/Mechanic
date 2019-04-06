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
    constructor(command) {
        super(command);
        // tslint:disable-next-line:max-line-length
        this.kind = ASTnodeKind_1.ASTnodeKind.bad;
        logg_1.logg("ASTNodeCommand");
        switch (mvdan_sh_1.syntax.NodeType(command)) {
            case "CallExpr":
                return new ASTNodeCallExpr_1.ASTNodeCallExpr(command);
            case "IfClause":
                return new ASTNodeIfClause_1.ASTNodeIfClause(command);
            case "WhileClause":
                return new ASTNodeWhileClause_1.ASTNodeWhileClause(command);
            case "ForClause":
                return new ASTNodeForClause_1.ASTNodeForClause(command);
            case "CaseClause":
                return new ASTNodeCaseClause_1.ASTNodeCaseClause(command);
            case "Block":
                return new ASTNodeBlock_1.ASTNodeBlock(command);
            case "Subshell":
                return new ASTNodeSubshell_1.ASTNodeSubshell(command);
            case "BinaryCmd":
                return new ASTNodeBinaryCmd_1.ASTNodeBinaryCmd(command);
            case "FuncDecl":
                return new ASTNodeFuncDecl_1.ASTNodeFuncDecl(command);
            case "ArithmCmd":
                return new ASTNodeArithmCmd_1.ASTNodeArithmCmd(command);
            case "TestClause":
                return new ASTNodeTestClause_1.ASTNodeTestClause(command);
            case "DeclClause":
                return new ASTNodeDeclClause_1.ASTNodeDeclClause(command);
            case "LetClause":
                return new ASTNodeLetClause_1.ASTNodeLetClause(command);
            case "TimeClause":
                return new ASTNodeTimeClause_1.ASTNodeTimeClause(command);
            case "CoprocClause":
                return new ASTNodeCoprocClause_1.ASTNodeCoprocClause(command);
            default:
                this.rest = { NodeType: mvdan_sh_1.syntax.NodeType(command) };
        }
    }
}
exports.ASTNodeCommand = ASTNodeCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBa0M7QUFDbEMsdUNBQW9DO0FBQ3BDLHlEQUFzRDtBQUN0RCx5REFBc0Q7QUFDdEQsaURBQThDO0FBQzlDLHVEQUFvRDtBQUNwRCwyREFBd0Q7QUFDeEQsK0RBQTREO0FBQzVELDJEQUF3RDtBQUN4RCx5REFBc0Q7QUFDdEQsdURBQW9EO0FBQ3BELHVEQUFvRDtBQUNwRCwrQ0FBNEM7QUFDNUMseURBQXNEO0FBQ3RELHVEQUFvRDtBQUNwRCwyREFBd0Q7QUFDeEQsMkRBQXdEO0FBQ3hELDZEQUEwRDtBQUMxRCxpQ0FBOEI7QUFJOUIsTUFBYSxjQUFlLFNBQVEsaUJBQU87SUFHekMsWUFBWSxPQUFpQjtRQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFIakIsMkNBQTJDO1FBQ3BDLFNBQUksR0FBc2UseUJBQVcsQ0FBQyxHQUFHLENBQUM7UUFHL2YsV0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdkIsUUFBUSxpQkFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoQyxLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxJQUFJLGlDQUFlLENBQUMsT0FBb0IsQ0FBQyxDQUFDO1lBQ25ELEtBQUssVUFBVTtnQkFDYixPQUFPLElBQUksaUNBQWUsQ0FBQyxPQUFvQixDQUFDLENBQUM7WUFDbkQsS0FBSyxhQUFhO2dCQUNoQixPQUFPLElBQUksdUNBQWtCLENBQUMsT0FBdUIsQ0FBQyxDQUFDO1lBQ3pELEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksbUNBQWdCLENBQUMsT0FBcUIsQ0FBQyxDQUFDO1lBQ3JELEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUkscUNBQWlCLENBQUMsT0FBc0IsQ0FBQyxDQUFDO1lBQ3ZELEtBQUssT0FBTztnQkFDVixPQUFPLElBQUksMkJBQVksQ0FBQyxPQUFpQixDQUFDLENBQUM7WUFDN0MsS0FBSyxVQUFVO2dCQUNiLE9BQU8sSUFBSSxpQ0FBZSxDQUFDLE9BQW9CLENBQUMsQ0FBQztZQUNuRCxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLG1DQUFnQixDQUFDLE9BQXFCLENBQUMsQ0FBQztZQUNyRCxLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxJQUFJLGlDQUFlLENBQUMsT0FBb0IsQ0FBQyxDQUFDO1lBQ25ELEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksbUNBQWdCLENBQUMsT0FBcUIsQ0FBQyxDQUFDO1lBQ3JELEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUkscUNBQWlCLENBQUMsT0FBc0IsQ0FBQyxDQUFDO1lBQ3ZELEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUkscUNBQWlCLENBQUMsT0FBc0IsQ0FBQyxDQUFDO1lBQ3ZELEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksbUNBQWdCLENBQUMsT0FBcUIsQ0FBQyxDQUFDO1lBQ3JELEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUkscUNBQWlCLENBQUMsT0FBc0IsQ0FBQyxDQUFDO1lBQ3ZELEtBQUssY0FBYztnQkFDakIsT0FBTyxJQUFJLHlDQUFtQixDQUFDLE9BQXdCLENBQUMsQ0FBQztZQUMzRDtnQkFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsUUFBUSxFQUFFLGlCQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0NBQ0Y7QUF6Q0Qsd0NBeUNDIn0=