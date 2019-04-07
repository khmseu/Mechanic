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
class ASTNodeSglQuoted extends ASTNode_1.ASTNode {
    constructor(sglquoted) {
        super(sglquoted);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeSglQuoted;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeSglQuoted];
        logg_1.logg("ASTNodeSglQuoted");
        this.Left = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, sglquoted.Left);
        this.Right = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, sglquoted.Right);
        this.Dollar = sglquoted.Dollar;
        this.Value = sglquoted.Value;
    }
}
exports.ASTNodeSglQuoted = ASTNodeSglQuoted;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVNnbFF1b3RlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZVNnbFF1b3RlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELGlDQUE4QjtBQUc5QixNQUFhLGdCQUFpQixTQUFRLGlCQUFPO0lBUTNDLFlBQVksU0FBcUI7UUFDL0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBUlosU0FBSSxHQUFpQyx5QkFBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ2xFLGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQVFwRSxXQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQWhCRCw0Q0FnQkMifQ==