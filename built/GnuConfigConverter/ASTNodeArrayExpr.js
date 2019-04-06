"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTArray_1 = require("./ASTArray");
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
        logg_1.logg("ASTNodeArrayExpr");
        const { Lparen, Rparen, Elems, Last, ...rest_arrayexpr } = arrayexpr;
        this.Lparen = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Lparen);
        this.Rparen = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Rparen);
        this.Elems = ASTArray_1.ASTArray(ASTNodeArrayElem_1.ASTNodeArrayElem, Elems);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, Last);
        this.rest = rest_arrayexpr;
    }
}
exports.ASTNodeArrayExpr = ASTNodeArrayExpr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUFycmF5RXhwci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUFycmF5RXhwci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgseUNBQXNDO0FBQ3RDLHVDQUFvQztBQUNwQyx5REFBc0Q7QUFDdEQscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELGlDQUE4QjtBQUc5QixNQUFhLGdCQUFpQixTQUFRLGlCQUFPO0lBTzNDLFlBQVksU0FBcUI7UUFDL0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBUFosU0FBSSxHQUFpQyx5QkFBVyxDQUFDLGdCQUFnQixDQUFDO1FBUXZFLFdBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxjQUFjLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFDckUsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxNQUFNLENBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLE1BQU0sQ0FBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQVEsQ0FBQyxtQ0FBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxJQUFJLENBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFqQkQsNENBaUJDIn0=