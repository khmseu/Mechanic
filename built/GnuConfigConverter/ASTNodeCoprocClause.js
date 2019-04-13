"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTMoreCoprocClause_1 = require("./ASTMoreCoprocClause");
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
        this.more = new ASTMoreCoprocClause_1.ASTMoreCoprocClause();
        logg_1.logg("ASTNodeCoprocClause");
        this.Coproc = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, coprocclause.Coproc);
        this.Name = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, coprocclause.Name);
        this.Stmt = ASTSingle_1.ASTSingle(ASTNodeStmt_1.ASTNodeStmt, coprocclause.Stmt);
        ["Coproc"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitASTNodeCoprocClausePre(this);
        if (this.Name) {
            this.Name.accept(visitor);
        }
        if (this.Stmt) {
            this.Stmt.accept(visitor);
        }
        visitor.visitASTNodeCoprocClausePost(this);
    }
}
exports.ASTNodeCoprocClause = ASTNodeCoprocClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNvcHJvY0NsYXVzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUNvcHJvY0NsYXVzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsK0RBQTREO0FBQzVELHVDQUFvQztBQUNwQywrQ0FBNEM7QUFDNUMsK0NBQTRDO0FBRTVDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxtQkFBb0IsU0FBUSxpQkFBTztJQVE5QyxZQUFZLFlBQTJCO1FBQ3JDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQVJmLFNBQUksR0FBb0MseUJBQVcsQ0FBQyxtQkFBbUIsQ0FBQztRQUN4RSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDbEUsU0FBSSxHQUF3QixJQUFJLHlDQUFtQixFQUFFLENBQUM7UUFPM0QsV0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLHlCQUFXLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyx5QkFBVyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxHQUF1QixNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxNQUFNLENBQUMsT0FBdUI7UUFDbkMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0I7UUFDRCxPQUFPLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBOUJELGtEQThCQyJ9