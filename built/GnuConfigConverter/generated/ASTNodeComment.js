"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("../logg");
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
class ASTNodeComment extends ASTNode_1.ASTNode {
    constructor(comment, parent, parentField) {
        super(comment, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeComment;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeComment];
        logg_1.logg("ASTNodeComment");
        this.Hash = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, comment.Hash);
        this.Text = comment.Text;
        ["kind", "parent", "parentField", "Hash"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPreBefore(this);
        visitor.visitASTNodeCommentPre(this);
        visitor.visitAllPreAfter(this);
        visitor.visitAllPostBefore(this);
        visitor.visitASTNodeCommentPost(this);
        visitor.visitAllPostAfter(this);
    }
}
exports.ASTNodeComment = ASTNodeComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNvbW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2dlbmVyYXRlZC9BU1ROb2RlQ29tbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsa0NBQStCO0FBRS9CLHVDQUFvQztBQUNwQywrQ0FBNEM7QUFDNUMscUNBQWtDO0FBQ2xDLHFFQUFrRTtBQUdsRSxNQUFhLGNBQWUsU0FBUSxpQkFBTztJQU16QyxZQUFZLE9BQWlCLEVBQVMsTUFBc0IsRUFBUyxXQUFtQjtRQUN0RixLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQURBLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFMakYsU0FBSSxHQUErQix5QkFBVyxDQUFDLGNBQWMsQ0FBQztRQUM5RCxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBTWxFLFdBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsK0NBQXNCLENBQUMsZUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDekIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN0RCxNQUFNLElBQUksR0FBdUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLE9BQXVCO1FBQ25DLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9CLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDRjtBQTFCRCx3Q0EwQkMifQ==