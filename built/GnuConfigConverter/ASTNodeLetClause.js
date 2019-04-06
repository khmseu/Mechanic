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
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const logg_1 = require("./logg");
class ASTNodeLetClause extends ASTNode_1.ASTNode {
    constructor(letclause) {
        super(letclause);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeLetClause;
        logg_1.logg("ASTNodeLetClause");
        const { Let, Exprs, ...rest_letclause } = letclause;
        this.Let = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Let);
        this.Exprs = ASTArray_1.ASTArray(ASTNodeArithmExpr_1.ASTNodeArithmExpr, Exprs);
        this.rest = rest_letclause;
    }
}
exports.ASTNodeLetClause = ASTNodeLetClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUxldENsYXVzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUxldENsYXVzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgseUNBQXNDO0FBQ3RDLHVDQUFvQztBQUNwQywyREFBd0Q7QUFDeEQsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUNsQyx1REFBb0Q7QUFDcEQsaUNBQThCO0FBRzlCLE1BQWEsZ0JBQWlCLFNBQVEsaUJBQU87SUFLM0MsWUFBWSxTQUFxQjtRQUMvQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFMWixTQUFJLEdBQWlDLHlCQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFNdkUsV0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekIsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxjQUFjLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFDcEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxHQUFHLENBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFRLENBQUMscUNBQWlCLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBYkQsNENBYUMifQ==