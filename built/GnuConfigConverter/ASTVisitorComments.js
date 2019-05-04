"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTVisitorBase_1 = require("./ASTVisitorBase");
const joiner_1 = require("./joiner");
class ASTVisitorComments extends ASTVisitorBase_1.ASTVisitorBase {
    visitASTNodeCommentPre(node) {
        // logg({ Text: node.Text });
        if (!node.parent.more[node.parentField]) {
            node.parent.more[node.parentField] = [];
        }
        node.parent.more[node.parentField].push(node.Text);
        node.parent.more.commentField[node.parentField]++;
    }
    visitAllPost(node) {
        // logg({ Text: node.Text });
        Object.keys(node.more.commentField).forEach((field) => {
            node.more[field] = "// " + joiner_1.joiner(node.more[field], "\n// ");
        });
    }
}
exports.ASTVisitorComments = ASTVisitorComments;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUVmlzaXRvckNvbW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1RWaXNpdG9yQ29tbWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUlILHFEQUFrRDtBQUNsRCxxQ0FBa0M7QUFFbEMsTUFBYSxrQkFBbUIsU0FBUSwrQkFBYztJQUM3QyxzQkFBc0IsQ0FBQyxJQUFvQjtRQUNoRCw2QkFBNkI7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFDTSxZQUFZLENBQUMsSUFBYTtRQUMvQiw2QkFBNkI7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLGVBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBZkQsZ0RBZUMifQ==