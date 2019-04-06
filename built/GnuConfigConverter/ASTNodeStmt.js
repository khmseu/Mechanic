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
        logg_1.logg("ASTNodeStmt");
        const { Comments, Cmd, Position, Semicolon, Negated, Background, Coprocess, Redirs, ...rest_stmt } = stmt;
        this.Comments = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, Comments);
        this.Cmd = ASTSingle_1.ASTSingle(ASTNodeCommand_1.ASTNodeCommand, Cmd);
        this.Position = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Position);
        this.Semicolon = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Semicolon);
        this.Negated = Negated;
        this.Background = Background;
        this.Coprocess = Coprocess;
        this.Redirs = ASTArray_1.ASTArray(ASTNodeRedirect_1.ASTNodeRedirect, Redirs);
        this.rest = rest_stmt;
    }
}
exports.ASTNodeStmt = ASTNodeStmt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVN0bXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVTdG10LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx5Q0FBc0M7QUFDdEMsdUNBQW9DO0FBQ3BDLHFEQUFrRDtBQUNsRCxxREFBa0Q7QUFDbEQsK0NBQTRDO0FBQzVDLHVEQUFvRDtBQUNwRCxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxXQUFZLFNBQVEsaUJBQU87SUFXdEMsWUFBWSxJQUFXO1FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVhQLFNBQUksR0FBNEIseUJBQVcsQ0FBQyxXQUFXLENBQUM7UUFZN0QsV0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzFHLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQVEsQ0FBQywrQkFBYyxFQUFFLFFBQVEsQ0FBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxHQUFHLEdBQUcscUJBQVMsQ0FBQywrQkFBYyxFQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsUUFBUSxDQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxTQUFTLENBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFRLENBQUMsaUNBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUF6QkQsa0NBeUJDIn0=