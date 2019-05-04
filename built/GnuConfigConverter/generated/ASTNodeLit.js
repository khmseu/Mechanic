"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("../logg");
const ASTMoreLit_1 = require("./ASTMoreLit");
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
class ASTNodeLit extends ASTNode_1.ASTNode {
    constructor(lit, parent, parentField) {
        super(lit, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeLit;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeLit];
        this.more = new ASTMoreLit_1.ASTMoreLit();
        logg_1.logg("ASTNodeLit");
        this.ValuePos = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, lit.ValuePos);
        this.ValueEnd = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, lit.ValueEnd);
        this.Value = lit.Value;
        ["kind", "parent", "parentField", "ValuePos", "ValueEnd"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPre(this);
        visitor.visitASTNodeLitPre(this);
        visitor.visitASTNodeLitPost(this);
        visitor.visitAllPost(this);
    }
}
exports.ASTNodeLit = ASTNodeLit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUxpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvZ2VuZXJhdGVkL0FTVE5vZGVMaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILGtDQUErQjtBQUUvQiw2Q0FBMEM7QUFDMUMsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMscUVBQWtFO0FBR2xFLE1BQWEsVUFBVyxTQUFRLGlCQUFPO0lBUXJDLFlBQVksR0FBUyxFQUFTLE1BQXNCLEVBQVMsV0FBbUI7UUFDOUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFESixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBUHpFLFNBQUksR0FBMkIseUJBQVcsQ0FBQyxVQUFVLENBQUM7UUFDdEQsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RCxTQUFJLEdBQWUsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFPekMsV0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsK0NBQXNCLENBQUMsZUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsUUFBUSxHQUFHLCtDQUFzQixDQUFDLGVBQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3RFLE1BQU0sSUFBSSxHQUF1QixNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxNQUFNLENBQUMsT0FBdUI7UUFDbkMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBM0JELGdDQTJCQyJ9