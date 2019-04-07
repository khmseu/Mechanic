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
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeArrayElem];
        logg_1.logg("ASTNodeArrayElem");
        this.Index = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, arrayelem.Index);
        this.Value = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, arrayelem.Value);
        this.Comments = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, arrayelem.Comments);
    }
}
exports.ASTNodeArrayElem = ASTNodeArrayElem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUFycmF5RWxlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUFycmF5RWxlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgseUNBQXNDO0FBQ3RDLHVDQUFvQztBQUNwQywyREFBd0Q7QUFDeEQscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1QywrQ0FBNEM7QUFDNUMsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUc5QixNQUFhLGdCQUFpQixTQUFRLGlCQUFPO0lBTzNDLFlBQVksU0FBcUI7UUFDL0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBUFosU0FBSSxHQUFpQyx5QkFBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ2xFLGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQU9wRSxXQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFTLENBQUMscUNBQWlCLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxLQUFLLEdBQUcscUJBQVMsQ0FBQyx5QkFBVyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFFLENBQUM7SUFDaEUsQ0FBQztDQUNGO0FBZEQsNENBY0MifQ==