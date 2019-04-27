"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTMoreLit_1 = require("./ASTMoreLit");
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const logg_1 = require("./logg");
class ASTNodeLit extends ASTNode_1.ASTNode {
    constructor(lit, parent, parentField) {
        super(lit, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeLit;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeLit];
        this.more = new ASTMoreLit_1.ASTMoreLit();
        logg_1.logg("ASTNodeLit");
        this.ValuePos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, lit.ValuePos);
        this.ValueEnd = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, lit.ValueEnd);
        this.Value = lit.Value;
        ["kind", "parent", "parentField", "ValuePos", "ValueEnd"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitASTNodeLitPre(this);
        visitor.visitASTNodeLitPost(this);
    }
}
exports.ASTNodeLit = ASTNodeLit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUxpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUxpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsNkNBQTBDO0FBQzFDLHVDQUFvQztBQUNwQywrQ0FBNEM7QUFDNUMscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUVwRCxpQ0FBOEI7QUFHOUIsTUFBYSxVQUFXLFNBQVEsaUJBQU87SUFRckMsWUFBWSxHQUFTLEVBQVMsTUFBc0IsRUFBUyxXQUFtQjtRQUM5RSxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQURKLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFQekUsU0FBSSxHQUEyQix5QkFBVyxDQUFDLFVBQVUsQ0FBQztRQUN0RCxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pELFNBQUksR0FBZSxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQU96QyxXQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3RFLE1BQU0sSUFBSSxHQUF1QixNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxNQUFNLENBQUMsT0FBdUI7UUFDbkMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0Y7QUF6QkQsZ0NBeUJDIn0=