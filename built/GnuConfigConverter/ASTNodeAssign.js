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
        logg_1.logg("ASTNodeAssign");
        const { Append, Naked, Name, Index, Value, Array, ...rest_assign } = assign;
        this.Append = Append;
        this.Naked = Naked;
        this.Name = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, Name);
        this.Index = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, Index);
        this.Value = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, Value);
        this.Array = ASTSingle_1.ASTSingle(ASTNodeArrayExpr_1.ASTNodeArrayExpr, Array);
        this.rest = rest_assign;
    }
}
exports.ASTNodeAssign = ASTNodeAssign;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUFzc2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUFzc2lnbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQW9DO0FBQ3BDLDJEQUF3RDtBQUN4RCx5REFBc0Q7QUFDdEQsK0NBQTRDO0FBQzVDLDZDQUEwQztBQUMxQywrQ0FBNEM7QUFDNUMsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUc5QixNQUFhLGFBQWMsU0FBUSxpQkFBTztJQVN4QyxZQUFZLE1BQWU7UUFDekIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBVFQsU0FBSSxHQUE4Qix5QkFBVyxDQUFDLGFBQWEsQ0FBQztRQVVqRSxXQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsV0FBVyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQzVFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyx1QkFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcscUJBQVMsQ0FBQyxxQ0FBaUIsRUFBRSxLQUFLLENBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFTLENBQUMseUJBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFTLENBQUMsbUNBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7SUFDMUIsQ0FBQztDQUNGO0FBckJELHNDQXFCQyJ9