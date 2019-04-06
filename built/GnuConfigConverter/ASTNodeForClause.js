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
        logg_1.logg("ASTNodeForClause");
        const { ForPos, DoPos, DonePos, Select, Loop, Do, DoLast, ...rest_forclause } = forclause;
        this.ForPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, ForPos);
        this.DoPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, DoPos);
        this.DonePos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, DonePos);
        this.Select = Select;
        this.Loop = ASTSingle_1.ASTSingle(ASTNodeLoop_1.ASTNodeLoop, Loop);
        this.Do = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, Do);
        this.DoLast = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, DoLast);
        this.rest = rest_forclause;
    }
}
exports.ASTNodeForClause = ASTNodeForClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUZvckNsYXVzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUZvckNsYXVzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgseUNBQXNDO0FBQ3RDLHVDQUFvQztBQUNwQyxxREFBa0Q7QUFDbEQsK0NBQTRDO0FBQzVDLCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsZ0JBQWlCLFNBQVEsaUJBQU87SUFVM0MsWUFBWSxTQUFxQjtRQUMvQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFWWixTQUFJLEdBQWlDLHlCQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFXdkUsV0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekIsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLGNBQWMsRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUMxRixJQUFJLENBQUMsTUFBTSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLE1BQU0sQ0FBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxPQUFPLENBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMseUJBQVcsRUFBRSxJQUFJLENBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsRUFBRSxHQUFHLHFCQUFTLENBQUMsaUNBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxNQUFNLENBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUF2QkQsNENBdUJDIn0=