"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTVisitorBase_1 = require("./ASTVisitorBase");
class ASTVisitorComments extends ASTVisitorBase_1.ASTVisitorBase {
    visitASTNodeCommentPre(node) {
        if (!node.parent.more[node.parentField]) {
            node.parent.more[node.parentField] = [];
        }
        node.parent.more[node.parentField].push(node.Text);
    }
}
exports.ASTVisitorComments = ASTVisitorComments;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUVmlzaXRvckNvbW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1RWaXNpdG9yQ29tbWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUdILHFEQUFrRDtBQUVsRCxNQUFhLGtCQUFtQixTQUFRLCtCQUFjO0lBQzdDLHNCQUFzQixDQUFDLElBQW9CO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRjtBQVBELGdEQU9DIn0=