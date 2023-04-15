"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTVisitorBase_1 = require("./generated/ASTVisitorBase");
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
    visitAllPostBefore(node) {
        // logg({ Text: node.Text });
        Object.keys(node.more.commentField).forEach((field) => {
            node.more[field] = "// " + joiner_1.joiner(node.more[field], "\n// ");
        });
    }
}
exports.ASTVisitorComments = ASTVisitorComments;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUVmlzaXRvckNvbW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1RWaXNpdG9yQ29tbWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUlILCtEQUE0RDtBQUM1RCxxQ0FBa0M7QUFFbEMsTUFBYSxrQkFBbUIsU0FBUSwrQkFBYztJQUM3QyxzQkFBc0IsQ0FBQyxJQUFvQjtRQUNoRCw2QkFBNkI7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFDTSxrQkFBa0IsQ0FBQyxJQUFhO1FBQ3JDLDZCQUE2QjtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsZUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFmRCxnREFlQyJ9