"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTNode = void 0;
const logg_1 = require("../logg");
const ASTCall_1 = require("./ASTCall");
const ASTMore_1 = require("./ASTMore");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
class ASTNode {
    constructor(node, parent, parentField) {
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.bad;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.bad];
        this.more = new ASTMore_1.ASTMore();
        (0, logg_1.logg)("ASTNode");
        this.Pos = (0, ASTSimpleSingle_1.ASTSimpleSingle)(ASTPos_1.ASTPos, (0, ASTCall_1.ASTCall)(node.Pos));
        this.End = (0, ASTSimpleSingle_1.ASTSimpleSingle)(ASTPos_1.ASTPos, (0, ASTCall_1.ASTCall)(node.End));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvZ2VuZXJhdGVkL0FTVE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOzs7QUFFSCxrQ0FBK0I7QUFFL0IsdUNBQW9DO0FBQ3BDLHVDQUFvQztBQUNwQywrQ0FBNEM7QUFDNUMscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUdwRCxNQUFhLE9BQU87SUFPbEIsWUFBWSxJQUFXLEVBQVMsTUFBc0IsRUFBUyxXQUFtQjtRQUFsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBTjNFLFNBQUksR0FBZ0IseUJBQVcsQ0FBQyxHQUFHLENBQUM7UUFDcEMsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxTQUFJLEdBQVksSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFLbkMsSUFBQSxXQUFJLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFBLGlDQUFlLEVBQUMsZUFBTSxFQUFFLElBQUEsaUJBQU8sRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUEsaUNBQWUsRUFBQyxlQUFNLEVBQUUsSUFBQSxpQkFBTyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzVELE1BQU0sSUFBSSxHQUF1QixNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxNQUFNLENBQUMsT0FBdUI7UUFDbkMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNwQixDQUFDO0NBQ0Y7QUFwQkQsMEJBb0JDIn0=