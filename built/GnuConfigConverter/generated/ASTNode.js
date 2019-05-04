"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("../logg");
const ASTCall_1 = require("./ASTCall");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
class ASTNode {
    constructor(node, parent, parentField) {
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.bad;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.bad];
        this.more = {};
        logg_1.logg("ASTNode");
        this.Pos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, ASTCall_1.ASTCall(node.Pos));
        this.End = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, ASTCall_1.ASTCall(node.End));
        ["kind", "parent", "parentField", "Pos", "End"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor = visitor;
    }
}
exports.ASTNode = ASTNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvZ2VuZXJhdGVkL0FTVE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILGtDQUErQjtBQUUvQix1Q0FBb0M7QUFDcEMsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUNsQyx1REFBb0Q7QUFHcEQsTUFBYSxPQUFPO0lBT2xCLFlBQVksSUFBVyxFQUFTLE1BQXNCLEVBQVMsV0FBbUI7UUFBbEQsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQU4zRSxTQUFJLEdBQWdCLHlCQUFXLENBQUMsR0FBRyxDQUFDO1FBQ3BDLGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEQsU0FBSSxHQUEyQixFQUFFLENBQUM7UUFLdkMsV0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsaUJBQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsR0FBRyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLGlCQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDNUQsTUFBTSxJQUFJLEdBQXVCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxPQUF1QjtRQUNuQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3BCLENBQUM7Q0FDRjtBQXBCRCwwQkFvQkMifQ==