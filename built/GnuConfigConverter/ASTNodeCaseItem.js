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
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeCaseItem extends ASTNode_1.ASTNode {
    constructor(caseitem) {
        super(caseitem);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeCaseItem;
        logg_1.logg("ASTNodeCaseItem");
        const { Op, OpPos, Comments, Patterns, StmtList, Last, ...rest_caseitem } = caseitem;
        this.Op = Op;
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, OpPos);
        this.Comments = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, Comments);
        this.Patterns = ASTArray_1.ASTArray(ASTNodeWord_1.ASTNodeWord, Patterns);
        this.StmtList = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, StmtList);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, Last);
        this.rest = rest_caseitem;
    }
}
exports.ASTNodeCaseItem = ASTNodeCaseItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNhc2VJdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlQ2FzZUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUNsQyx1REFBb0Q7QUFDcEQsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUc5QixNQUFhLGVBQWdCLFNBQVEsaUJBQU87SUFTMUMsWUFBWSxRQUFtQjtRQUM3QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFUWCxTQUFJLEdBQWdDLHlCQUFXLENBQUMsZUFBZSxDQUFDO1FBVXJFLFdBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLGFBQWEsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUNyRixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsUUFBUSxDQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBUSxDQUFDLHlCQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBUyxDQUFDLGlDQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsSUFBSSxDQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBckJELDBDQXFCQyJ9