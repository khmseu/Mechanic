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
class ASTNodeIfClause extends ASTNode_1.ASTNode {
    constructor(ifclause) {
        super(ifclause);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeIfClause;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeIfClause];
        logg_1.logg("ASTNodeIfClause");
        this.Position = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, ifclause.Position);
        this.ThenPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, ifclause.ThenPos);
        this.FiPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, ifclause.FiPos);
        this.Cond = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, ifclause.Cond);
        this.CondLast = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, ifclause.CondLast);
        this.Then = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, ifclause.Then);
        this.ThenLast = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, ifclause.ThenLast);
        this.Else = ASTSingle_1.ASTSingle(ASTNodeIfClause, ifclause.Else);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, ifclause.Last);
    }
}
exports.ASTNodeIfClause = ASTNodeIfClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUlmQ2xhdXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlSWZDbGF1c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsZUFBZ0IsU0FBUSxpQkFBTztJQWExQyxZQUFZLFFBQW1CO1FBQzdCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQWJYLFNBQUksR0FBZ0MseUJBQVcsQ0FBQyxlQUFlLENBQUM7UUFDaEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQWFuRSxXQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMsaUNBQWUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyxpQ0FBZSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBRSxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQTFCRCwwQ0EwQkMifQ==