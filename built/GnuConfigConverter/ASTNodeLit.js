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
        logg_1.logg("ASTNodeLit");
        const { ValuePos, ValueEnd, Value, ...rest_lit } = lit;
        this.ValuePos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, ValuePos);
        this.ValueEnd = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, ValueEnd);
        this.Value = Value;
        this.rest = rest_lit;
    }
}
exports.ASTNodeLit = ASTNodeLit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUxpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUxpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELGlDQUE4QjtBQUc5QixNQUFhLFVBQVcsU0FBUSxpQkFBTztJQU1yQyxZQUFZLEdBQVM7UUFDbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBTk4sU0FBSSxHQUEyQix5QkFBVyxDQUFDLFVBQVUsQ0FBQztRQU8zRCxXQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkIsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsUUFBUSxDQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxRQUFRLENBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7QUFmRCxnQ0FlQyJ9