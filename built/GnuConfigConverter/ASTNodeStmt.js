"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTArray_1 = require("./ASTArray");
const ASTMoreStmt_1 = require("./ASTMoreStmt");
const ASTNode_1 = require("./ASTNode");
const ASTNodeCommand_1 = require("./ASTNodeCommand");
const ASTNodeComment_1 = require("./ASTNodeComment");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeRedirect_1 = require("./ASTNodeRedirect");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeStmt extends ASTNode_1.ASTNode {
    constructor(stmt) {
        super(stmt);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeStmt;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeStmt];
        this.more = new ASTMoreStmt_1.ASTMoreStmt();
        logg_1.logg("ASTNodeStmt");
        this.Comments = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, stmt.Comments);
        this.Cmd = ASTSingle_1.ASTSingle(ASTNodeCommand_1.ASTNodeCommand, stmt.Cmd);
        this.Position = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, stmt.Position);
        this.Semicolon = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, stmt.Semicolon);
        this.Negated = stmt.Negated;
        this.Background = stmt.Background;
        this.Coprocess = stmt.Coprocess;
        this.Redirs = ASTArray_1.ASTArray(ASTNodeRedirect_1.ASTNodeRedirect, stmt.Redirs);
        ["Position", "Semicolon"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitASTNodeStmtPre(this);
        this.Comments.forEach((e) => e.accept(visitor));
        this.Cmd.accept(visitor);
        this.Redirs.forEach((e) => e.accept(visitor));
        visitor.visitASTNodeStmtPost(this);
    }
}
exports.ASTNodeStmt = ASTNodeStmt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVN0bXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVTdG10LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx5Q0FBc0M7QUFDdEMsK0NBQTRDO0FBQzVDLHVDQUFvQztBQUNwQyxxREFBa0Q7QUFDbEQscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFFcEQscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsV0FBWSxTQUFRLGlCQUFPO0lBYXRDLFlBQVksSUFBVztRQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFiUCxTQUFJLEdBQTRCLHlCQUFXLENBQUMsV0FBVyxDQUFDO1FBQ3hELGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUQsU0FBSSxHQUFnQixJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQVkzQyxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxHQUFHLEdBQUcscUJBQVMsQ0FBQywrQkFBYyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFRLENBQUMsaUNBQWUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsTUFBTSxJQUFJLEdBQXVCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxPQUF1QjtRQUNuQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQ0Y7QUFyQ0Qsa0NBcUNDIn0=