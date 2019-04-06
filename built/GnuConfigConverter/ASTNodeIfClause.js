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
        logg_1.logg("ASTNodeIfClause");
        const { Position, ThenPos, FiPos, Cond, CondLast, Then, ThenLast, Else, Last, ...rest_ifclause } = ifclause;
        this.Position = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Position);
        this.ThenPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, ThenPos);
        this.FiPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, FiPos);
        this.Cond = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, Cond);
        this.CondLast = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, CondLast);
        this.Then = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, Then);
        this.ThenLast = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, ThenLast);
        this.Else = ASTSingle_1.ASTSingle(ASTNodeIfClause, Else);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, Last);
        this.rest = rest_ifclause;
    }
}
exports.ASTNodeIfClause = ASTNodeIfClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUlmQ2xhdXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlSWZDbGF1c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsZUFBZ0IsU0FBUSxpQkFBTztJQVkxQyxZQUFZLFFBQW1CO1FBQzdCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQVpYLFNBQUksR0FBZ0MseUJBQVcsQ0FBQyxlQUFlLENBQUM7UUFhckUsV0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEIsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsYUFBYSxFQUFFLEdBQUcsUUFBUSxDQUFDO1FBQzVHLElBQUksQ0FBQyxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsUUFBUSxDQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxPQUFPLENBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyxpQ0FBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQVEsQ0FBQywrQkFBYyxFQUFFLFFBQVEsQ0FBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyxpQ0FBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQVEsQ0FBQywrQkFBYyxFQUFFLFFBQVEsQ0FBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsSUFBSSxDQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBM0JELDBDQTJCQyJ9