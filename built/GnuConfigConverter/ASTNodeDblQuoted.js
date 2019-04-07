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
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeWordPart_1 = require("./ASTNodeWordPart");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const logg_1 = require("./logg");
class ASTNodeDblQuoted extends ASTNode_1.ASTNode {
    constructor(dblquoted) {
        super(dblquoted);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeDblQuoted;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeDblQuoted];
        logg_1.logg("ASTNodeDblQuoted");
        this.Position = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, dblquoted.Position);
        this.Dollar = dblquoted.Dollar;
        this.Parts = ASTArray_1.ASTArray(ASTNodeWordPart_1.ASTNodeWordPart, dblquoted.Parts);
    }
}
exports.ASTNodeDblQuoted = ASTNodeDblQuoted;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZURibFF1b3RlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZURibFF1b3RlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgseUNBQXNDO0FBQ3RDLHVDQUFvQztBQUNwQywrQ0FBNEM7QUFDNUMsdURBQW9EO0FBQ3BELHFDQUFrQztBQUNsQyx1REFBb0Q7QUFDcEQsaUNBQThCO0FBRzlCLE1BQWEsZ0JBQWlCLFNBQVEsaUJBQU87SUFPM0MsWUFBWSxTQUFxQjtRQUMvQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFQWixTQUFJLEdBQWlDLHlCQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDbEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBT3BFLFdBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFRLENBQUMsaUNBQWUsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDM0QsQ0FBQztDQUNGO0FBZEQsNENBY0MifQ==