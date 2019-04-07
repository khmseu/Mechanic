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
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const logg_1 = require("./logg");
class ASTNodeLetClause extends ASTNode_1.ASTNode {
    constructor(letclause) {
        super(letclause);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeLetClause;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeLetClause];
        logg_1.logg("ASTNodeLetClause");
        this.Let = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, letclause.Let);
        this.Exprs = ASTArray_1.ASTArray(ASTNodeArithmExpr_1.ASTNodeArithmExpr, letclause.Exprs);
    }
}
exports.ASTNodeLetClause = ASTNodeLetClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUxldENsYXVzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUxldENsYXVzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgseUNBQXNDO0FBQ3RDLHVDQUFvQztBQUNwQywyREFBd0Q7QUFDeEQsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUNsQyx1REFBb0Q7QUFDcEQsaUNBQThCO0FBRzlCLE1BQWEsZ0JBQWlCLFNBQVEsaUJBQU87SUFNM0MsWUFBWSxTQUFxQjtRQUMvQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFOWixTQUFJLEdBQWlDLHlCQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDbEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBTXBFLFdBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQVEsQ0FBQyxxQ0FBaUIsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDN0QsQ0FBQztDQUNGO0FBWkQsNENBWUMifQ==