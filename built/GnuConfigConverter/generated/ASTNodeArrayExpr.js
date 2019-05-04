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
const ASTMoreArrayExpr_1 = require("./ASTMoreArrayExpr");
const ASTNode_1 = require("./ASTNode");
const ASTNodeArrayElem_1 = require("./ASTNodeArrayElem");
const ASTNodeComment_1 = require("./ASTNodeComment");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
class ASTNodeArrayExpr extends ASTNode_1.ASTNode {
    constructor(arrayexpr, parent, parentField) {
        super(arrayexpr, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeArrayExpr;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeArrayExpr];
        this.more = new ASTMoreArrayExpr_1.ASTMoreArrayExpr();
        logg_1.logg("ASTNodeArrayExpr");
        this.Lparen = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, arrayexpr.Lparen);
        this.Rparen = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, arrayexpr.Rparen);
        this.Elems = ASTArray_1.ASTArray(ASTNodeArrayElem_1.ASTNodeArrayElem, arrayexpr.Elems, this, "Elems");
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, arrayexpr.Last, this, "Last");
        ["kind", "parent", "parentField", "Lparen", "Rparen"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPre(this);
        visitor.visitASTNodeArrayExprPre(this);
        this.Elems.forEach((e) => e.accept(visitor));
        this.Last.forEach((e) => e.accept(visitor));
        visitor.visitASTNodeArrayExprPost(this);
        visitor.visitAllPost(this);
    }
}
exports.ASTNodeArrayExpr = ASTNodeArrayExpr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUFycmF5RXhwci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvZ2VuZXJhdGVkL0FTVE5vZGVBcnJheUV4cHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILGtDQUErQjtBQUUvQix5Q0FBc0M7QUFDdEMseURBQXNEO0FBQ3RELHVDQUFvQztBQUNwQyx5REFBc0Q7QUFDdEQscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMscUVBQWtFO0FBR2xFLE1BQWEsZ0JBQWlCLFNBQVEsaUJBQU87SUFTM0MsWUFBWSxTQUFxQixFQUFTLE1BQXNCLEVBQVMsV0FBbUI7UUFDMUYsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFERSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBUnJGLFNBQUksR0FBaUMseUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsRSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0QsU0FBSSxHQUFxQixJQUFJLG1DQUFnQixFQUFFLENBQUM7UUFRckQsV0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRywrQ0FBc0IsQ0FBQyxlQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxNQUFNLEdBQUcsK0NBQXNCLENBQUMsZUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFRLENBQUMsbUNBQWdCLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDbEUsTUFBTSxJQUFJLEdBQXVCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxPQUF1QjtRQUNuQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBOUJELDRDQThCQyJ9