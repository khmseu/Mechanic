"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("../logg");
const ParserTypes_1 = require("../ParserTypes");
const Token_1 = require("../Token");
const ASTMoreRedirect_1 = require("./ASTMoreRedirect");
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLit_1 = require("./ASTNodeLit");
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
const ASTSingle_1 = require("./ASTSingle");
class ASTNodeRedirect extends ASTNode_1.ASTNode {
    constructor(redirect, parent, parentField) {
        super(redirect, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeRedirect;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeRedirect];
        this.more = new ASTMoreRedirect_1.ASTMoreRedirect();
        logg_1.logg("ASTNodeRedirect");
        this.OpPos = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, redirect.OpPos);
        this.Op = ParserTypes_1.RedirOperator[redirect.Op];
        this.OpString = Token_1.op(redirect.Op);
        this.N = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, redirect.N, this, "N");
        this.Word = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, redirect.Word, this, "Word");
        this.Hdoc = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, redirect.Hdoc, this, "Hdoc");
        ["kind", "parent", "parentField", "OpPos"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPre(this);
        visitor.visitASTNodeRedirectPre(this);
        if (this.N) {
            this.N.accept(visitor);
        }
        if (this.Word) {
            this.Word.accept(visitor);
        }
        if (this.Hdoc) {
            this.Hdoc.accept(visitor);
        }
        visitor.visitASTNodeRedirectPost(this);
        visitor.visitAllPost(this);
    }
}
exports.ASTNodeRedirect = ASTNodeRedirect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVJlZGlyZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9nZW5lcmF0ZWQvQVNUTm9kZVJlZGlyZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxrQ0FBK0I7QUFDL0IsZ0RBQTBEO0FBQzFELG9DQUFxQztBQUNyQyx1REFBb0Q7QUFDcEQsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1Qyw2Q0FBMEM7QUFDMUMsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUNsQyxxRUFBa0U7QUFDbEUsMkNBQXdDO0FBR3hDLE1BQWEsZUFBZ0IsU0FBUSxpQkFBTztJQVcxQyxZQUFZLFFBQW1CLEVBQVMsTUFBc0IsRUFBUyxXQUFtQjtRQUN4RixLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQURDLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFWbkYsU0FBSSxHQUFnQyx5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQUNoRSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlELFNBQUksR0FBb0IsSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFVbkQsV0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRywrQ0FBc0IsQ0FBQyxlQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxFQUFFLEdBQUcsMkJBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFFLENBQUUsUUFBUSxDQUFDLEVBQXVCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsQ0FBQyxHQUFHLHFCQUFTLENBQUMsdUJBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMseUJBQVcsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMseUJBQVcsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3ZELE1BQU0sSUFBSSxHQUF1QixNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxNQUFNLENBQUMsT0FBdUI7UUFDbkMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBekNELDBDQXlDQyJ9