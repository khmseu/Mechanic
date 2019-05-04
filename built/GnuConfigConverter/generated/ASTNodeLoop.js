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
const ASTNodeCStyleLoop_1 = require("./ASTNodeCStyleLoop");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeWordIter_1 = require("./ASTNodeWordIter");
class ASTNodeLoop extends ASTNode_1.ASTNode {
    constructor(loop, parent, parentField) {
        super(loop, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.bad;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.bad];
        logg_1.logg("ASTNodeLoop");
        switch (mvdan_sh_1.syntax.NodeType(loop)) {
            case "WordIter":
                return new ASTNodeWordIter_1.ASTNodeWordIter(loop, parent, parentField);
            case "CStyleLoop":
                return new ASTNodeCStyleLoop_1.ASTNodeCStyleLoop(loop, parent, parentField);
            default:
                throw { NodeType: mvdan_sh_1.syntax.NodeType(loop) };
        }
    }
}
exports.ASTNodeLoop = ASTNodeLoop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUxvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2dlbmVyYXRlZC9BU1ROb2RlTG9vcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQWtDO0FBQ2xDLGtDQUErQjtBQUUvQix1Q0FBb0M7QUFDcEMsMkRBQXdEO0FBQ3hELCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFFcEQsTUFBYSxXQUFZLFNBQVEsaUJBQU87SUFHdEMsWUFBWSxJQUFXLEVBQVMsTUFBc0IsRUFBUyxXQUFtQjtRQUNoRixLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQURILFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFGM0UsU0FBSSxHQUFrRix5QkFBVyxDQUFDLEdBQUcsQ0FBQztRQUN0RyxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBR3ZELFdBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwQixRQUFRLGlCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLEtBQUssVUFBVTtnQkFDYixPQUFPLElBQUksaUNBQWUsQ0FBQyxJQUFpQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNyRSxLQUFLLFlBQVk7Z0JBQ2YsT0FBTyxJQUFJLHFDQUFpQixDQUFDLElBQW1CLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3pFO2dCQUNFLE1BQU0sRUFBRSxRQUFRLEVBQUUsaUJBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUM3QztJQUNILENBQUM7Q0FDRjtBQWZELGtDQWVDIn0=