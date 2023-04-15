"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("../logg");
const ASTArray_1 = require("./ASTArray");
const ASTNode_1 = require("./ASTNode");
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTNodeComment_1 = require("./ASTNodeComment");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTSingle_1 = require("./ASTSingle");
const ASTSingleNotNull_1 = require("./ASTSingleNotNull");
class ASTNodeArrayElem extends ASTNode_1.ASTNode {
    constructor(arrayelem, parent, parentField) {
        super(arrayelem, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeArrayElem;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeArrayElem];
        logg_1.logg("ASTNodeArrayElem");
        this.Index = ASTSingleNotNull_1.ASTSingleNotNull(ASTNodeArithmExpr_1.ASTNodeArithmExpr, arrayelem.Index, this, "Index");
        this.Value = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, arrayelem.Value, this, "Value");
        this.Comments = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, arrayelem.Comments, this, "Comments");
        ["kind", "parent", "parentField"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPreBefore(this);
        visitor.visitASTNodeArrayElemPre(this);
        visitor.visitAllPreAfter(this);
        this.Index.accept(visitor);
        if (this.Value) {
            this.Value.accept(visitor);
        }
        this.Comments.forEach((e) => e.accept(visitor));
        visitor.visitAllPostBefore(this);
        visitor.visitASTNodeArrayElemPost(this);
        visitor.visitAllPostAfter(this);
    }
}
exports.ASTNodeArrayElem = ASTNodeArrayElem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUFycmF5RWxlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvZ2VuZXJhdGVkL0FTVE5vZGVBcnJheUVsZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILGtDQUErQjtBQUUvQix5Q0FBc0M7QUFDdEMsdUNBQW9DO0FBQ3BDLDJEQUF3RDtBQUN4RCxxREFBa0Q7QUFDbEQsK0NBQTRDO0FBQzVDLCtDQUE0QztBQUM1QywyQ0FBd0M7QUFDeEMseURBQXNEO0FBR3RELE1BQWEsZ0JBQWlCLFNBQVEsaUJBQU87SUFPM0MsWUFBWSxTQUFxQixFQUFTLE1BQXNCLEVBQVMsV0FBbUI7UUFDMUYsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFERSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBTnJGLFNBQUksR0FBaUMseUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsRSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFPcEUsV0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxtQ0FBZ0IsQ0FBQyxxQ0FBaUIsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFTLENBQUMseUJBQVcsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMvRSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDOUMsTUFBTSxJQUFJLEdBQXVCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxPQUF1QjtRQUNuQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBaENELDRDQWdDQyJ9