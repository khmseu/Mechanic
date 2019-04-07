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
        logg_1.logg("ASTNodeCaseClause");
        this.Case = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, caseclause.Case);
        this.Esac = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, caseclause.Esac);
        this.Word = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, caseclause.Word);
        this.Items = ASTArray_1.ASTArray(ASTNodeCaseItem_1.ASTNodeCaseItem, caseclause.Items);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, caseclause.Last);
    }
}
exports.ASTNodeCaseClause = ASTNodeCaseClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNhc2VDbGF1c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVDYXNlQ2xhdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx5Q0FBc0M7QUFDdEMsdUNBQW9DO0FBQ3BDLHVEQUFvRDtBQUNwRCxxREFBa0Q7QUFDbEQsK0NBQTRDO0FBQzVDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxpQkFBa0IsU0FBUSxpQkFBTztJQVM1QyxZQUFZLFVBQXVCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQVRiLFNBQUksR0FBa0MseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQUNwRSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFTckUsV0FBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLHlCQUFXLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQVEsQ0FBQyxpQ0FBZSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7SUFDekQsQ0FBQztDQUNGO0FBbEJELDhDQWtCQyJ9