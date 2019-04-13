"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTArray_1 = require("./ASTArray");
const ASTMoreCaseClause_1 = require("./ASTMoreCaseClause");
const ASTNode_1 = require("./ASTNode");
const ASTNodeCaseItem_1 = require("./ASTNodeCaseItem");
const ASTNodeComment_1 = require("./ASTNodeComment");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeCaseClause extends ASTNode_1.ASTNode {
    constructor(caseclause) {
        super(caseclause);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeCaseClause;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeCaseClause];
        this.more = new ASTMoreCaseClause_1.ASTMoreCaseClause();
        logg_1.logg("ASTNodeCaseClause");
        this.Case = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, caseclause.Case);
        this.Esac = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, caseclause.Esac);
        this.Word = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, caseclause.Word);
        this.Items = ASTArray_1.ASTArray(ASTNodeCaseItem_1.ASTNodeCaseItem, caseclause.Items);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, caseclause.Last);
        ["Case", "Esac"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitASTNodeCaseClausePre(this);
        if (this.Word) {
            this.Word.accept(visitor);
        }
        this.Items.forEach((e) => e.accept(visitor));
        this.Last.forEach((e) => e.accept(visitor));
        visitor.visitASTNodeCaseClausePost(this);
    }
}
exports.ASTNodeCaseClause = ASTNodeCaseClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNhc2VDbGF1c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVDYXNlQ2xhdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx5Q0FBc0M7QUFDdEMsMkRBQXdEO0FBQ3hELHVDQUFvQztBQUNwQyx1REFBb0Q7QUFDcEQscURBQWtEO0FBQ2xELCtDQUE0QztBQUU1QywrQ0FBNEM7QUFDNUMscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsaUJBQWtCLFNBQVEsaUJBQU87SUFVNUMsWUFBWSxVQUF1QjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFWYixTQUFJLEdBQWtDLHlCQUFXLENBQUMsaUJBQWlCLENBQUM7UUFDcEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hFLFNBQUksR0FBc0IsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO1FBU3ZELFdBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyx5QkFBVyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFRLENBQUMsaUNBQWUsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDO1FBQ3ZELENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzdCLE1BQU0sSUFBSSxHQUF1QixNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxNQUFNLENBQUMsT0FBdUI7UUFDbkMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFqQ0QsOENBaUNDIn0=