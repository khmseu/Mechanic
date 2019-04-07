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
const ASTNodeComment_1 = require("./ASTNodeComment");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLoop_1 = require("./ASTNodeLoop");
const ASTNodeStmtList_1 = require("./ASTNodeStmtList");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeForClause extends ASTNode_1.ASTNode {
    constructor(forclause) {
        super(forclause);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeForClause;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeForClause];
        logg_1.logg("ASTNodeForClause");
        this.ForPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, forclause.ForPos);
        this.DoPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, forclause.DoPos);
        this.DonePos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, forclause.DonePos);
        this.Select = forclause.Select;
        this.Loop = ASTSingle_1.ASTSingle(ASTNodeLoop_1.ASTNodeLoop, forclause.Loop);
        this.Do = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, forclause.Do);
        this.DoLast = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, forclause.DoLast);
    }
}
exports.ASTNodeForClause = ASTNodeForClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUZvckNsYXVzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUZvckNsYXVzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgseUNBQXNDO0FBQ3RDLHVDQUFvQztBQUNwQyxxREFBa0Q7QUFDbEQsK0NBQTRDO0FBQzVDLCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsZ0JBQWlCLFNBQVEsaUJBQU87SUFXM0MsWUFBWSxTQUFxQjtRQUMvQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFYWixTQUFJLEdBQWlDLHlCQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDbEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBV3BFLFdBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxPQUFPLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBRSxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMseUJBQVcsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxxQkFBUyxDQUFDLGlDQUFlLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQVEsQ0FBQywrQkFBYyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUUsQ0FBQztJQUM1RCxDQUFDO0NBQ0Y7QUF0QkQsNENBc0JDIn0=