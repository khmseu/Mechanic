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
        logg_1.logg("ASTNodeDblQuoted");
        const { Position, Dollar, Parts, ...rest_dblquoted } = dblquoted;
        this.Position = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Position);
        this.Dollar = Dollar;
        this.Parts = ASTArray_1.ASTArray(ASTNodeWordPart_1.ASTNodeWordPart, Parts);
        this.rest = rest_dblquoted;
    }
}
exports.ASTNodeDblQuoted = ASTNodeDblQuoted;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZURibFF1b3RlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZURibFF1b3RlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgseUNBQXNDO0FBQ3RDLHVDQUFvQztBQUNwQywrQ0FBNEM7QUFDNUMsdURBQW9EO0FBQ3BELHFDQUFrQztBQUNsQyx1REFBb0Q7QUFDcEQsaUNBQThCO0FBRzlCLE1BQWEsZ0JBQWlCLFNBQVEsaUJBQU87SUFNM0MsWUFBWSxTQUFxQjtRQUMvQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFOWixTQUFJLEdBQWlDLHlCQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFPdkUsV0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekIsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsY0FBYyxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsUUFBUSxDQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLGlDQUFlLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBZkQsNENBZUMifQ==