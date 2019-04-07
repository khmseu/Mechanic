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
        logg_1.logg("ASTNodeStmt");
        this.Comments = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, stmt.Comments);
        this.Cmd = ASTSingle_1.ASTSingle(ASTNodeCommand_1.ASTNodeCommand, stmt.Cmd);
        this.Position = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, stmt.Position);
        this.Semicolon = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, stmt.Semicolon);
        this.Negated = stmt.Negated;
        this.Background = stmt.Background;
        this.Coprocess = stmt.Coprocess;
        this.Redirs = ASTArray_1.ASTArray(ASTNodeRedirect_1.ASTNodeRedirect, stmt.Redirs);
    }
}
exports.ASTNodeStmt = ASTNodeStmt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVN0bXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVTdG10LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx5Q0FBc0M7QUFDdEMsdUNBQW9DO0FBQ3BDLHFEQUFrRDtBQUNsRCxxREFBa0Q7QUFDbEQsK0NBQTRDO0FBQzVDLHVEQUFvRDtBQUNwRCxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxXQUFZLFNBQVEsaUJBQU87SUFZdEMsWUFBWSxJQUFXO1FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVpQLFNBQUksR0FBNEIseUJBQVcsQ0FBQyxXQUFXLENBQUM7UUFDeEQsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQVkvRCxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxHQUFHLEdBQUcscUJBQVMsQ0FBQywrQkFBYyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFRLENBQUMsaUNBQWUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUNGO0FBeEJELGtDQXdCQyJ9