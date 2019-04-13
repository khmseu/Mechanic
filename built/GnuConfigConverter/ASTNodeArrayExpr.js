"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTArray_1 = require("./ASTArray");
const ASTMoreArrayExpr_1 = require("./ASTMoreArrayExpr");
const ASTNode_1 = require("./ASTNode");
const ASTNodeArrayElem_1 = require("./ASTNodeArrayElem");
const ASTNodeComment_1 = require("./ASTNodeComment");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const logg_1 = require("./logg");
class ASTNodeArrayExpr extends ASTNode_1.ASTNode {
    constructor(arrayexpr) {
        super(arrayexpr);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeArrayExpr;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeArrayExpr];
        this.more = new ASTMoreArrayExpr_1.ASTMoreArrayExpr();
        logg_1.logg("ASTNodeArrayExpr");
        this.Lparen = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, arrayexpr.Lparen);
        this.Rparen = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, arrayexpr.Rparen);
        this.Elems = ASTArray_1.ASTArray(ASTNodeArrayElem_1.ASTNodeArrayElem, arrayexpr.Elems);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, arrayexpr.Last);
        ["Lparen", "Rparen"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitASTNodeArrayExprPre(this);
        this.Elems.forEach((e) => e.accept(visitor));
        this.Last.forEach((e) => e.accept(visitor));
        visitor.visitASTNodeArrayExprPost(this);
    }
}
exports.ASTNodeArrayExpr = ASTNodeArrayExpr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUFycmF5RXhwci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUFycmF5RXhwci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgseUNBQXNDO0FBQ3RDLHlEQUFzRDtBQUN0RCx1Q0FBb0M7QUFDcEMseURBQXNEO0FBQ3RELHFEQUFrRDtBQUNsRCwrQ0FBNEM7QUFFNUMscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCxpQ0FBOEI7QUFHOUIsTUFBYSxnQkFBaUIsU0FBUSxpQkFBTztJQVMzQyxZQUFZLFNBQXFCO1FBQy9CLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQVRaLFNBQUksR0FBaUMseUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsRSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0QsU0FBSSxHQUFxQixJQUFJLG1DQUFnQixFQUFFLENBQUM7UUFRckQsV0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLG1DQUFnQixFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDdEQsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDakMsTUFBTSxJQUFJLEdBQXVCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxPQUF1QjtRQUNuQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0Y7QUE1QkQsNENBNEJDIn0=