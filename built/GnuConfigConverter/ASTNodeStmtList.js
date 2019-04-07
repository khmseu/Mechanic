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
const logg_1 = require("./logg");
class ASTNodeStmtList extends ASTNode_1.ASTNode {
    constructor(stmtlist) {
        super(stmtlist);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeStmtList;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeStmtList];
        logg_1.logg("ASTNodeStmtList");
        this.Stmts = ASTArray_1.ASTArray(ASTNodeStmt_1.ASTNodeStmt, stmtlist.Stmts);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, stmtlist.Last);
    }
}
exports.ASTNodeStmtList = ASTNodeStmtList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVN0bXRMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlU3RtdExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1QywrQ0FBNEM7QUFDNUMsaUNBQThCO0FBRzlCLE1BQWEsZUFBZ0IsU0FBUSxpQkFBTztJQU0xQyxZQUFZLFFBQW1CO1FBQzdCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQU5YLFNBQUksR0FBZ0MseUJBQVcsQ0FBQyxlQUFlLENBQUM7UUFDaEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQU1uRSxXQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFRLENBQUMseUJBQVcsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBRSxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQVpELDBDQVlDIn0=