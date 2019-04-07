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
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeWhileClause];
        logg_1.logg("ASTNodeWhileClause");
        this.WhilePos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, whileclause.WhilePos);
        this.DoPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, whileclause.DoPos);
        this.DonePos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, whileclause.DonePos);
        this.Until = whileclause.Until;
        this.Cond = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, whileclause.Cond);
        this.CondLast = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, whileclause.CondLast);
        this.Do = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, whileclause.Do);
        this.DoLast = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, whileclause.DoLast);
    }
}
exports.ASTNodeWhileClause = ASTNodeWhileClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVdoaWxlQ2xhdXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlV2hpbGVDbGF1c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsa0JBQW1CLFNBQVEsaUJBQU87SUFZN0MsWUFBWSxXQUF5QjtRQUNuQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFaZCxTQUFJLEdBQW1DLHlCQUFXLENBQUMsa0JBQWtCLENBQUM7UUFDdEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBWXRFLFdBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMsaUNBQWUsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxFQUFFLEdBQUcscUJBQVMsQ0FBQyxpQ0FBZSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFFLENBQUM7SUFDOUQsQ0FBQztDQUNGO0FBeEJELGdEQXdCQyJ9