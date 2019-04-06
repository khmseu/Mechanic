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
        logg_1.logg("ASTNodeCaseClause");
        const { Case, Esac, Word, Items, Last, ...rest_caseclause } = caseclause;
        this.Case = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Case);
        this.Esac = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Esac);
        this.Word = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, Word);
        this.Items = ASTArray_1.ASTArray(ASTNodeCaseItem_1.ASTNodeCaseItem, Items);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, Last);
        this.rest = rest_caseclause;
    }
}
exports.ASTNodeCaseClause = ASTNodeCaseClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNhc2VDbGF1c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVDYXNlQ2xhdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx5Q0FBc0M7QUFDdEMsdUNBQW9DO0FBQ3BDLHVEQUFvRDtBQUNwRCxxREFBa0Q7QUFDbEQsK0NBQTRDO0FBQzVDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxpQkFBa0IsU0FBUSxpQkFBTztJQVE1QyxZQUFZLFVBQXVCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQVJiLFNBQUksR0FBa0MseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQVN6RSxXQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQixNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLGVBQWUsRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUN6RSxJQUFJLENBQUMsSUFBSSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLElBQUksQ0FBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsSUFBSSxDQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxxQkFBUyxDQUFDLHlCQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLGlDQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsSUFBSSxDQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7SUFDOUIsQ0FBQztDQUNGO0FBbkJELDhDQW1CQyJ9