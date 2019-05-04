"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("../logg");
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeStmt_1 = require("./ASTNodeStmt");
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
const ASTSingle_1 = require("./ASTSingle");
class ASTNodeCoprocClause extends ASTNode_1.ASTNode {
    constructor(coprocclause, parent, parentField) {
        super(coprocclause, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeCoprocClause;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeCoprocClause];
        logg_1.logg("ASTNodeCoprocClause");
        this.Coproc = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, coprocclause.Coproc);
        this.Name = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, coprocclause.Name, this, "Name");
        this.Stmt = ASTSingle_1.ASTSingle(ASTNodeStmt_1.ASTNodeStmt, coprocclause.Stmt, this, "Stmt");
        ["kind", "parent", "parentField", "Coproc"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPre(this);
        visitor.visitASTNodeCoprocClausePre(this);
        if (this.Name) {
            this.Name.accept(visitor);
        }
        if (this.Stmt) {
            this.Stmt.accept(visitor);
        }
        visitor.visitASTNodeCoprocClausePost(this);
        visitor.visitAllPost(this);
    }
}
exports.ASTNodeCoprocClause = ASTNodeCoprocClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNvcHJvY0NsYXVzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvZ2VuZXJhdGVkL0FTVE5vZGVDb3Byb2NDbGF1c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILGtDQUErQjtBQUUvQix1Q0FBb0M7QUFDcEMsK0NBQTRDO0FBQzVDLCtDQUE0QztBQUM1QywrQ0FBNEM7QUFDNUMscUNBQWtDO0FBQ2xDLHFFQUFrRTtBQUNsRSwyQ0FBd0M7QUFHeEMsTUFBYSxtQkFBb0IsU0FBUSxpQkFBTztJQU85QyxZQUFZLFlBQTJCLEVBQVMsTUFBc0IsRUFBUyxXQUFtQjtRQUNoRyxLQUFLLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQURLLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFOM0YsU0FBSSxHQUFvQyx5QkFBVyxDQUFDLG1CQUFtQixDQUFDO1FBQ3hFLGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQU92RSxXQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLCtDQUFzQixDQUFDLGVBQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLHlCQUFXLEVBQUUsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLHlCQUFXLEVBQUUsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN4RCxNQUFNLElBQUksR0FBdUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLE9BQXVCO1FBQ25DLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0I7UUFDRCxPQUFPLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUEvQkQsa0RBK0JDIn0=