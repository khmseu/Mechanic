"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("../logg");
const ASTArray_1 = require("./ASTArray");
const ASTNode_1 = require("./ASTNode");
const ASTNodeComment_1 = require("./ASTNodeComment");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeStmtList_1 = require("./ASTNodeStmtList");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
const ASTSingle_1 = require("./ASTSingle");
class ASTNodeWhileClause extends ASTNode_1.ASTNode {
    constructor(whileclause, parent, parentField) {
        super(whileclause, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeWhileClause;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeWhileClause];
        logg_1.logg("ASTNodeWhileClause");
        this.WhilePos = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, whileclause.WhilePos);
        this.DoPos = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, whileclause.DoPos);
        this.DonePos = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, whileclause.DonePos);
        this.Until = whileclause.Until;
        this.Cond = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, whileclause.Cond, this, "Cond");
        this.CondLast = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, whileclause.CondLast, this, "CondLast");
        this.Do = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, whileclause.Do, this, "Do");
        this.DoLast = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, whileclause.DoLast, this, "DoLast");
        ["kind", "parent", "parentField", "WhilePos", "DoPos", "DonePos"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPreBefore(this);
        visitor.visitASTNodeWhileClausePre(this);
        visitor.visitAllPreAfter(this);
        if (this.Cond) {
            this.Cond.accept(visitor);
        }
        this.CondLast.forEach((e) => e.accept(visitor));
        if (this.Do) {
            this.Do.accept(visitor);
        }
        this.DoLast.forEach((e) => e.accept(visitor));
        visitor.visitAllPostBefore(this);
        visitor.visitASTNodeWhileClausePost(this);
        visitor.visitAllPostAfter(this);
    }
}
exports.ASTNodeWhileClause = ASTNodeWhileClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVdoaWxlQ2xhdXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9nZW5lcmF0ZWQvQVNUTm9kZVdoaWxlQ2xhdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxrQ0FBK0I7QUFFL0IseUNBQXNDO0FBQ3RDLHVDQUFvQztBQUNwQyxxREFBa0Q7QUFDbEQsK0NBQTRDO0FBQzVDLHVEQUFvRDtBQUNwRCxxQ0FBa0M7QUFDbEMscUVBQWtFO0FBQ2xFLDJDQUF3QztBQUd4QyxNQUFhLGtCQUFtQixTQUFRLGlCQUFPO0lBWTdDLFlBQVksV0FBeUIsRUFBUyxNQUFzQixFQUFTLFdBQW1CO1FBQzlGLEtBQUssQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBREksV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQVh6RixTQUFJLEdBQW1DLHlCQUFXLENBQUMsa0JBQWtCLENBQUM7UUFDdEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBWXRFLFdBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsK0NBQXNCLENBQUMsZUFBTSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsS0FBSyxHQUFHLCtDQUFzQixDQUFDLGVBQU0sRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLE9BQU8sR0FBRywrQ0FBc0IsQ0FBQyxlQUFNLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMsaUNBQWUsRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsRUFBRSxHQUFHLHFCQUFTLENBQUMsaUNBQWUsRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMzRSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDOUUsTUFBTSxJQUFJLEdBQXVCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxPQUF1QjtRQUNuQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDRjtBQTdDRCxnREE2Q0MifQ==