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
        logg_1.logg("ASTNodeSglQuoted");
        const { Left, Right, Dollar, Value, ...rest_sglquoted } = sglquoted;
        this.Left = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Left);
        this.Right = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Right);
        this.Dollar = Dollar;
        this.Value = Value;
        this.rest = rest_sglquoted;
    }
}
exports.ASTNodeSglQuoted = ASTNodeSglQuoted;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVNnbFF1b3RlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZVNnbFF1b3RlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELGlDQUE4QjtBQUc5QixNQUFhLGdCQUFpQixTQUFRLGlCQUFPO0lBTzNDLFlBQVksU0FBcUI7UUFDL0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBUFosU0FBSSxHQUFpQyx5QkFBVyxDQUFDLGdCQUFnQixDQUFDO1FBUXZFLFdBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxjQUFjLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFDcEUsSUFBSSxDQUFDLElBQUksR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxJQUFJLENBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQWpCRCw0Q0FpQkMifQ==