"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTArray_1 = require("./ASTArray");
const ASTNode_1 = require("./ASTNode");
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTNodeComment_1 = require("./ASTNodeComment");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeArrayElem extends ASTNode_1.ASTNode {
    constructor(arrayelem) {
        super(arrayelem);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeArrayElem;
        logg_1.logg("ASTNodeArrayElem");
        const { Index, Value, Comments, ...rest_arrayelem } = arrayelem;
        this.Index = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, Index);
        this.Value = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, Value);
        this.Comments = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, Comments);
        this.rest = rest_arrayelem;
    }
}
exports.ASTNodeArrayElem = ASTNodeArrayElem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUFycmF5RWxlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUFycmF5RWxlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgseUNBQXNDO0FBQ3RDLHVDQUFvQztBQUNwQywyREFBd0Q7QUFDeEQscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1QywrQ0FBNEM7QUFDNUMsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUc5QixNQUFhLGdCQUFpQixTQUFRLGlCQUFPO0lBTTNDLFlBQVksU0FBcUI7UUFDL0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBTlosU0FBSSxHQUFpQyx5QkFBVyxDQUFDLGdCQUFnQixDQUFDO1FBT3ZFLFdBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLGNBQWMsRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFTLENBQUMscUNBQWlCLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBUyxDQUFDLHlCQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBUSxDQUFDLCtCQUFjLEVBQUUsUUFBUSxDQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBZkQsNENBZUMifQ==