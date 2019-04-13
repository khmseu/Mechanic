"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTArray_1 = require("./ASTArray");
const ASTMoreWhileClause_1 = require("./ASTMoreWhileClause");
const ASTNode_1 = require("./ASTNode");
const ASTNodeComment_1 = require("./ASTNodeComment");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeStmtList_1 = require("./ASTNodeStmtList");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeWhileClause extends ASTNode_1.ASTNode {
    constructor(whileclause) {
        super(whileclause);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeWhileClause;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeWhileClause];
        this.more = new ASTMoreWhileClause_1.ASTMoreWhileClause();
        logg_1.logg("ASTNodeWhileClause");
        this.WhilePos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, whileclause.WhilePos);
        this.DoPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, whileclause.DoPos);
        this.DonePos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, whileclause.DonePos);
        this.Until = whileclause.Until;
        this.Cond = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, whileclause.Cond);
        this.CondLast = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, whileclause.CondLast);
        this.Do = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, whileclause.Do);
        this.DoLast = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, whileclause.DoLast);
        ["WhilePos", "DoPos", "DonePos"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitASTNodeWhileClausePre(this);
        if (this.Cond) {
            this.Cond.accept(visitor);
        }
        this.CondLast.forEach((e) => e.accept(visitor));
        if (this.Do) {
            this.Do.accept(visitor);
        }
        this.DoLast.forEach((e) => e.accept(visitor));
        visitor.visitASTNodeWhileClausePost(this);
    }
}
exports.ASTNodeWhileClause = ASTNodeWhileClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVdoaWxlQ2xhdXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlV2hpbGVDbGF1c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHlDQUFzQztBQUN0Qyw2REFBMEQ7QUFDMUQsdUNBQW9DO0FBQ3BDLHFEQUFrRDtBQUNsRCwrQ0FBNEM7QUFDNUMsdURBQW9EO0FBRXBELHFDQUFrQztBQUNsQyx1REFBb0Q7QUFDcEQsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUc5QixNQUFhLGtCQUFtQixTQUFRLGlCQUFPO0lBYTdDLFlBQVksV0FBeUI7UUFDbkMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBYmQsU0FBSSxHQUFtQyx5QkFBVyxDQUFDLGtCQUFrQixDQUFDO1FBQ3RFLGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqRSxTQUFJLEdBQXVCLElBQUksdUNBQWtCLEVBQUUsQ0FBQztRQVl6RCxXQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLGlDQUFlLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQVEsQ0FBQywrQkFBYyxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUNoRSxJQUFJLENBQUMsRUFBRSxHQUFHLHFCQUFTLENBQUMsaUNBQWUsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQzVELENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUM3QyxNQUFNLElBQUksR0FBdUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLE9BQXVCO1FBQ25DLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUExQ0QsZ0RBMENDIn0=