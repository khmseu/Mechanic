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
const ASTNodeStmt_1 = require("./ASTNodeStmt");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
class ASTNodeProcSubst extends ASTNode_1.ASTNode {
    constructor(procsubst, parent, parentField) {
        super(procsubst, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeProcSubst;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeProcSubst];
        logg_1.logg("ASTNodeProcSubst");
        this.OpPos = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, procsubst.OpPos);
        this.Rparen = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, procsubst.Rparen);
        this.Op = ParserTypes_1.ProcOperator[procsubst.Op];
        this.OpString = Token_1.op(procsubst.Op);
        this.Stmts = ASTArray_1.ASTArray(ASTNodeStmt_1.ASTNodeStmt, procsubst.Stmts, this, "Stmts");
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, procsubst.Last, this, "Last");
        ["kind", "parent", "parentField", "OpPos", "Rparen"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPreBefore(this);
        visitor.visitASTNodeProcSubstPre(this);
        visitor.visitAllPreAfter(this);
        this.Stmts.forEach((e) => e.accept(visitor));
        this.Last.forEach((e) => e.accept(visitor));
        visitor.visitAllPostBefore(this);
        visitor.visitASTNodeProcSubstPost(this);
        visitor.visitAllPostAfter(this);
    }
}
exports.ASTNodeProcSubst = ASTNodeProcSubst;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVByb2NTdWJzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvZ2VuZXJhdGVkL0FTVE5vZGVQcm9jU3Vic3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILGtDQUErQjtBQUMvQixnREFBMEQ7QUFDMUQsb0NBQXFDO0FBQ3JDLHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1QywrQ0FBNEM7QUFDNUMscUNBQWtDO0FBQ2xDLHFFQUFrRTtBQUdsRSxNQUFhLGdCQUFpQixTQUFRLGlCQUFPO0lBVTNDLFlBQVksU0FBcUIsRUFBUyxNQUFzQixFQUFTLFdBQW1CO1FBQzFGLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBREUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQVRyRixTQUFJLEdBQWlDLHlCQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDbEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBVXBFLFdBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsK0NBQXNCLENBQUMsZUFBTSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHLCtDQUFzQixDQUFDLGVBQU0sRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLEVBQUUsR0FBRywwQkFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQUUsQ0FBRSxTQUFTLENBQUMsRUFBdUIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQVEsQ0FBQyx5QkFBVyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQVEsQ0FBQywrQkFBYyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25FLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2pFLE1BQU0sSUFBSSxHQUF1QixNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxNQUFNLENBQUMsT0FBdUI7UUFDbkMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDRjtBQW5DRCw0Q0FtQ0MifQ==