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
class ASTNodeCmdSubst extends ASTNode_1.ASTNode {
    constructor(cmdsubst) {
        super(cmdsubst);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeCmdSubst;
        logg_1.logg("ASTNodeCmdSubst");
        const { Left, Right, StmtList, Last, TempFile, ReplyVar, ...rest_cmdsubst } = cmdsubst;
        this.Left = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Left);
        this.Right = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Right);
        this.StmtList = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, StmtList);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, Last);
        this.TempFile = TempFile;
        this.ReplyVar = ReplyVar;
        this.rest = rest_cmdsubst;
    }
}
exports.ASTNodeCmdSubst = ASTNodeCmdSubst;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNtZFN1YnN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlQ21kU3Vic3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsZUFBZ0IsU0FBUSxpQkFBTztJQVMxQyxZQUFZLFFBQW1CO1FBQzdCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQVRYLFNBQUksR0FBZ0MseUJBQVcsQ0FBQyxlQUFlLENBQUM7UUFVckUsV0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEIsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsYUFBYSxFQUFFLEdBQUcsUUFBUSxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsSUFBSSxDQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxLQUFLLENBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFTLENBQUMsaUNBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxJQUFJLENBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFyQkQsMENBcUJDIn0=