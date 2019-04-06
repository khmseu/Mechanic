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
        logg_1.logg("ASTNode");
        const { Pos, End, ...rest_node } = node;
        this.Pos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Pos());
        this.End = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, End());
        this.rest = rest_node;
    }
}
exports.ASTNode = ASTNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUNsQyx1REFBb0Q7QUFDcEQsaUNBQThCO0FBRzlCLE1BQWEsT0FBTztJQU1sQixZQUFZLElBQVc7UUFMaEIsU0FBSSxHQUFnQix5QkFBVyxDQUFDLEdBQUcsQ0FBQztRQU16QyxXQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEIsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxHQUFHLEVBQUUsQ0FBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsR0FBRyxFQUFFLENBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFiRCwwQkFhQyJ9