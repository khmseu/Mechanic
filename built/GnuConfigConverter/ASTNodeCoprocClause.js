"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeStmt_1 = require("./ASTNodeStmt");
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeCoprocClause extends ASTNode_1.ASTNode {
    constructor(coprocclause) {
        super(coprocclause);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeCoprocClause;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeCoprocClause];
        logg_1.logg("ASTNodeCoprocClause");
        this.Coproc = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, coprocclause.Coproc);
        this.Name = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, coprocclause.Name);
        this.Stmt = ASTSingle_1.ASTSingle(ASTNodeStmt_1.ASTNodeStmt, coprocclause.Stmt);
    }
}
exports.ASTNodeCoprocClause = ASTNodeCoprocClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNvcHJvY0NsYXVzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUNvcHJvY0NsYXVzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1QywrQ0FBNEM7QUFDNUMsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUNsQyx1REFBb0Q7QUFDcEQsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUc5QixNQUFhLG1CQUFvQixTQUFRLGlCQUFPO0lBTzlDLFlBQVksWUFBMkI7UUFDckMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBUGYsU0FBSSxHQUFvQyx5QkFBVyxDQUFDLG1CQUFtQixDQUFDO1FBQ3hFLGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQU92RSxXQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMseUJBQVcsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLHlCQUFXLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDRjtBQWRELGtEQWNDIn0=