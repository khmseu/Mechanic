"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("../logg");
const ParserTypes_1 = require("../ParserTypes");
const Token_1 = require("../Token");
const ASTArray_1 = require("./ASTArray");
const ASTNode_1 = require("./ASTNode");
const ASTNodeComment_1 = require("./ASTNodeComment");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeStmtList_1 = require("./ASTNodeStmtList");
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
const ASTSingle_1 = require("./ASTSingle");
class ASTNodeCaseItem extends ASTNode_1.ASTNode {
    constructor(caseitem, parent, parentField) {
        super(caseitem, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeCaseItem;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeCaseItem];
        logg_1.logg("ASTNodeCaseItem");
        this.Op = ParserTypes_1.CaseOperator[caseitem.Op];
        this.OpString = Token_1.op(caseitem.Op);
        this.OpPos = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, caseitem.OpPos);
        this.Comments = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, caseitem.Comments, this, "Comments");
        this.Patterns = ASTArray_1.ASTArray(ASTNodeWord_1.ASTNodeWord, caseitem.Patterns, this, "Patterns");
        this.StmtList = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, caseitem.StmtList, this, "StmtList");
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, caseitem.Last, this, "Last");
        ["kind", "parent", "parentField", "OpPos"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPreBefore(this);
        visitor.visitASTNodeCaseItemPre(this);
        visitor.visitAllPreAfter(this);
        this.Comments.forEach((e) => e.accept(visitor));
        this.Patterns.forEach((e) => e.accept(visitor));
        if (this.StmtList) {
            this.StmtList.accept(visitor);
        }
        this.Last.forEach((e) => e.accept(visitor));
        visitor.visitAllPostBefore(this);
        visitor.visitASTNodeCaseItemPost(this);
        visitor.visitAllPostAfter(this);
    }
}
exports.ASTNodeCaseItem = ASTNodeCaseItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNhc2VJdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9nZW5lcmF0ZWQvQVNUTm9kZUNhc2VJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxrQ0FBK0I7QUFDL0IsZ0RBQXlEO0FBQ3pELG9DQUFxQztBQUNyQyx5Q0FBc0M7QUFDdEMsdUNBQW9DO0FBQ3BDLHFEQUFrRDtBQUNsRCwrQ0FBNEM7QUFDNUMsdURBQW9EO0FBQ3BELCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMscUVBQWtFO0FBQ2xFLDJDQUF3QztBQUd4QyxNQUFhLGVBQWdCLFNBQVEsaUJBQU87SUFXMUMsWUFBWSxRQUFtQixFQUFTLE1BQXNCLEVBQVMsV0FBbUI7UUFDeEYsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFEQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBVm5GLFNBQUksR0FBZ0MseUJBQVcsQ0FBQyxlQUFlLENBQUM7UUFDaEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQVduRSxXQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsRUFBRSxHQUFHLDBCQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBRSxDQUFFLFFBQVEsQ0FBQyxFQUF1QixDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRywrQ0FBc0IsQ0FBQyxlQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQVEsQ0FBQywrQkFBYyxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQVEsQ0FBQyx5QkFBVyxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQVMsQ0FBQyxpQ0FBZSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQVEsQ0FBQywrQkFBYyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdkQsTUFBTSxJQUFJLEdBQXVCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxPQUF1QjtRQUNuQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7QUF6Q0QsMENBeUNDIn0=