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
const ASTNodeCStyleLoop_1 = require("./ASTNodeCStyleLoop");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeWordIter_1 = require("./ASTNodeWordIter");
const logg_1 = require("./logg");
class ASTNodeLoop extends ASTNode_1.ASTNode {
    constructor(loop) {
        super(loop);
        this.kind = ASTnodeKind_1.ASTnodeKind.bad;
        logg_1.logg("ASTNodeLoop");
        switch (mvdan_sh_1.syntax.NodeType(loop)) {
            case "WordIter":
                return new ASTNodeWordIter_1.ASTNodeWordIter(loop);
            case "CStyleLoop":
                return new ASTNodeCStyleLoop_1.ASTNodeCStyleLoop(loop);
            default:
                this.rest = { NodeType: mvdan_sh_1.syntax.NodeType(loop) };
        }
    }
}
exports.ASTNodeLoop = ASTNodeLoop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUxvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVMb29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBa0M7QUFDbEMsdUNBQW9DO0FBQ3BDLDJEQUF3RDtBQUN4RCwrQ0FBNEM7QUFDNUMsdURBQW9EO0FBQ3BELGlDQUE4QjtBQUc5QixNQUFhLFdBQVksU0FBUSxpQkFBTztJQUV0QyxZQUFZLElBQVc7UUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRlAsU0FBSSxHQUFrRix5QkFBVyxDQUFDLEdBQUcsQ0FBQztRQUczRyxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEIsUUFBUSxpQkFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QixLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxJQUFJLGlDQUFlLENBQUMsSUFBaUIsQ0FBQyxDQUFDO1lBQ2hELEtBQUssWUFBWTtnQkFDZixPQUFPLElBQUkscUNBQWlCLENBQUMsSUFBbUIsQ0FBQyxDQUFDO1lBQ3BEO2dCQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxRQUFRLEVBQUUsaUJBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNuRDtJQUNILENBQUM7Q0FDRjtBQWRELGtDQWNDIn0=