"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTVisitorComments = void 0;
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
            node.more[field] = "// " + (0, joiner_1.joiner)(node.more[field], "\n// ");
        });
    }
}
exports.ASTVisitorComments = ASTVisitorComments;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUVmlzaXRvckNvbW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1RWaXNpdG9yQ29tbWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOzs7QUFJSCwrREFBNEQ7QUFDNUQscUNBQWtDO0FBRWxDLE1BQWEsa0JBQW1CLFNBQVEsK0JBQWM7SUFDN0Msc0JBQXNCLENBQUMsSUFBb0I7UUFDaEQsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ00sa0JBQWtCLENBQUMsSUFBYTtRQUNyQyw2QkFBNkI7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUEsZUFBTSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFmRCxnREFlQyJ9