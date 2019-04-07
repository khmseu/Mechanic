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
const ASTNodeStmt_1 = require("./ASTNodeStmt");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const logg_1 = require("./logg");
const ParserTypes_1 = require("./ParserTypes");
const Token_1 = require("./Token");
class ASTNodeProcSubst extends ASTNode_1.ASTNode {
    constructor(procsubst) {
        super(procsubst);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeProcSubst;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeProcSubst];
        logg_1.logg("ASTNodeProcSubst");
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, procsubst.OpPos);
        this.Rparen = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, procsubst.Rparen);
        this.Op = ParserTypes_1.ProcOperator[procsubst.Op];
        this.OpString = Token_1.op(procsubst.Op);
        this.Stmts = ASTArray_1.ASTArray(ASTNodeStmt_1.ASTNodeStmt, procsubst.Stmts);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, procsubst.Last);
    }
}
exports.ASTNodeProcSubst = ASTNodeProcSubst;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVByb2NTdWJzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZVByb2NTdWJzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgseUNBQXNDO0FBQ3RDLHVDQUFvQztBQUNwQyxxREFBa0Q7QUFDbEQsK0NBQTRDO0FBQzVDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELGlDQUE4QjtBQUM5QiwrQ0FBeUQ7QUFDekQsbUNBQW9DO0FBRXBDLE1BQWEsZ0JBQWlCLFNBQVEsaUJBQU87SUFVM0MsWUFBWSxTQUFxQjtRQUMvQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFWWixTQUFJLEdBQWlDLHlCQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDbEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBVXBFLFdBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxFQUFFLEdBQUcsMEJBQVksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFFLENBQUUsU0FBUyxDQUFDLEVBQXVCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFRLENBQUMseUJBQVcsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBRSxDQUFDO0lBQ3hELENBQUM7Q0FDRjtBQXBCRCw0Q0FvQkMifQ==