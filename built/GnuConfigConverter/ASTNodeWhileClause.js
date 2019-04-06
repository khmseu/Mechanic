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
const ASTNodeStmtList_1 = require("./ASTNodeStmtList");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeWhileClause extends ASTNode_1.ASTNode {
    constructor(whileclause) {
        super(whileclause);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeWhileClause;
        logg_1.logg("ASTNodeWhileClause");
        const { WhilePos, DoPos, DonePos, Until, Cond, CondLast, Do, DoLast, ...rest_whileclause } = whileclause;
        this.WhilePos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, WhilePos);
        this.DoPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, DoPos);
        this.DonePos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, DonePos);
        this.Until = Until;
        this.Cond = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, Cond);
        this.CondLast = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, CondLast);
        this.Do = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, Do);
        this.DoLast = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, DoLast);
        this.rest = rest_whileclause;
    }
}
exports.ASTNodeWhileClause = ASTNodeWhileClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVdoaWxlQ2xhdXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlV2hpbGVDbGF1c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsa0JBQW1CLFNBQVEsaUJBQU87SUFXN0MsWUFBWSxXQUF5QjtRQUNuQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFYZCxTQUFJLEdBQW1DLHlCQUFXLENBQUMsa0JBQWtCLENBQUM7UUFZM0UsV0FBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDM0IsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxnQkFBZ0IsRUFBRSxHQUFHLFdBQVcsQ0FBQztRQUN6RyxJQUFJLENBQUMsUUFBUSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLFFBQVEsQ0FBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxPQUFPLENBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMsaUNBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxRQUFRLENBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsRUFBRSxHQUFHLHFCQUFTLENBQUMsaUNBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxNQUFNLENBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQXpCRCxnREF5QkMifQ==