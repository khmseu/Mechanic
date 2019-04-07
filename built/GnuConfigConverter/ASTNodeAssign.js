"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTNode_1 = require("./ASTNode");
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTNodeArrayExpr_1 = require("./ASTNodeArrayExpr");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLit_1 = require("./ASTNodeLit");
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeAssign extends ASTNode_1.ASTNode {
    constructor(assign) {
        super(assign);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeAssign;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeAssign];
        logg_1.logg("ASTNodeAssign");
        this.Append = assign.Append;
        this.Naked = assign.Naked;
        this.Name = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, assign.Name);
        this.Index = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, assign.Index);
        this.Value = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, assign.Value);
        this.Array = ASTSingle_1.ASTSingle(ASTNodeArrayExpr_1.ASTNodeArrayExpr, assign.Array);
    }
}
exports.ASTNodeAssign = ASTNodeAssign;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUFzc2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUFzc2lnbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQW9DO0FBQ3BDLDJEQUF3RDtBQUN4RCx5REFBc0Q7QUFDdEQsK0NBQTRDO0FBQzVDLDZDQUEwQztBQUMxQywrQ0FBNEM7QUFDNUMsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUc5QixNQUFhLGFBQWMsU0FBUSxpQkFBTztJQVV4QyxZQUFZLE1BQWU7UUFDekIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBVlQsU0FBSSxHQUE4Qix5QkFBVyxDQUFDLGFBQWEsQ0FBQztRQUM1RCxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBVWpFLFdBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyx1QkFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFTLENBQUMscUNBQWlCLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcscUJBQVMsQ0FBQyx5QkFBVyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFTLENBQUMsbUNBQWdCLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDRjtBQXBCRCxzQ0FvQkMifQ==