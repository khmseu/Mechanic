"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const logg_1 = require("./logg");
class ASTNode {
    constructor(node) {
        this.kind = ASTnodeKind_1.ASTnodeKind.bad;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.bad];
        logg_1.logg("ASTNode");
        this.Pos = node.Pos ? ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, node.Pos()) : null;
        this.End = node.End ? ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, node.End()) : null;
    }
}
exports.ASTNode = ASTNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUNsQyx1REFBb0Q7QUFDcEQsaUNBQThCO0FBRzlCLE1BQWEsT0FBTztJQU1sQixZQUFZLElBQVc7UUFMaEIsU0FBSSxHQUFnQix5QkFBVyxDQUFDLEdBQUcsQ0FBQztRQUNwQyxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBS3ZELFdBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGlDQUFlLENBQUMsZUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ25FLENBQUM7Q0FDRjtBQVhELDBCQVdDIn0=