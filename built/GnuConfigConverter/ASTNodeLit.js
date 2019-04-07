"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const logg_1 = require("./logg");
class ASTNodeLit extends ASTNode_1.ASTNode {
    constructor(lit) {
        super(lit);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeLit;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeLit];
        logg_1.logg("ASTNodeLit");
        this.ValuePos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, lit.ValuePos);
        this.ValueEnd = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, lit.ValueEnd);
        this.Value = lit.Value;
    }
}
exports.ASTNodeLit = ASTNodeLit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUxpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUxpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELGlDQUE4QjtBQUc5QixNQUFhLFVBQVcsU0FBUSxpQkFBTztJQU9yQyxZQUFZLEdBQVM7UUFDbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBUE4sU0FBSSxHQUEyQix5QkFBVyxDQUFDLFVBQVUsQ0FBQztRQUN0RCxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBTzlELFdBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBZEQsZ0NBY0MifQ==