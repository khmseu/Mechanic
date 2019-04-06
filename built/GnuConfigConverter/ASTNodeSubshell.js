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
class ASTNodeSubshell extends ASTNode_1.ASTNode {
    constructor(subshell) {
        super(subshell);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeSubshell;
        logg_1.logg("ASTNodeSubshell");
        const { Lparen, Rparen, StmtList, Last, ...rest_subshell } = subshell;
        this.Lparen = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Lparen);
        this.Rparen = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Rparen);
        this.StmtList = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, StmtList);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, Last);
        this.rest = rest_subshell;
    }
}
exports.ASTNodeSubshell = ASTNodeSubshell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVN1YnNoZWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlU3Vic2hlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsZUFBZ0IsU0FBUSxpQkFBTztJQU8xQyxZQUFZLFFBQW1CO1FBQzdCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQVBYLFNBQUksR0FBZ0MseUJBQVcsQ0FBQyxlQUFlLENBQUM7UUFRckUsV0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLGFBQWEsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUN0RSxJQUFJLENBQUMsTUFBTSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLE1BQU0sQ0FBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsTUFBTSxDQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBUyxDQUFDLGlDQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsSUFBSSxDQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBakJELDBDQWlCQyJ9