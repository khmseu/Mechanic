"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTMoreComment_1 = require("./ASTMoreComment");
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const logg_1 = require("./logg");
class ASTNodeComment extends ASTNode_1.ASTNode {
    constructor(comment) {
        super(comment);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeComment;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeComment];
        this.more = new ASTMoreComment_1.ASTMoreComment();
        logg_1.logg("ASTNodeComment");
        this.Hash = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, comment.Hash);
        this.Text = comment.Text;
        ["Hash"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitASTNodeCommentPre(this);
        visitor.visitASTNodeCommentPost(this);
    }
}
exports.ASTNodeComment = ASTNodeComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNvbW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVDb21tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxxREFBa0Q7QUFDbEQsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUU1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELGlDQUE4QjtBQUc5QixNQUFhLGNBQWUsU0FBUSxpQkFBTztJQU96QyxZQUFZLE9BQWlCO1FBQzNCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQVBWLFNBQUksR0FBK0IseUJBQVcsQ0FBQyxjQUFjLENBQUM7UUFDOUQsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3RCxTQUFJLEdBQW1CLElBQUksK0JBQWMsRUFBRSxDQUFDO1FBTWpELFdBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUN6QixDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxHQUF1QixNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxNQUFNLENBQUMsT0FBdUI7UUFDbkMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0Y7QUF2QkQsd0NBdUJDIn0=