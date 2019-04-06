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
const ASTNodeStmt_1 = require("./ASTNodeStmt");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeBinaryCmd extends ASTNode_1.ASTNode {
    constructor(binarycmd) {
        super(binarycmd);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeBinaryCmd;
        logg_1.logg("ASTNodeBinaryCmd");
        const { OpPos, Op, X, Y, ...rest_binarycmd } = binarycmd;
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, OpPos);
        this.Op = Op;
        this.X = ASTSingle_1.ASTSingle(ASTNodeStmt_1.ASTNodeStmt, X);
        this.Y = ASTSingle_1.ASTSingle(ASTNodeStmt_1.ASTNodeStmt, Y);
        this.rest = rest_binarycmd;
    }
}
exports.ASTNodeBinaryCmd = ASTNodeBinaryCmd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUJpbmFyeUNtZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUJpbmFyeUNtZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1QywrQ0FBNEM7QUFDNUMscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsZ0JBQWlCLFNBQVEsaUJBQU87SUFPM0MsWUFBWSxTQUFxQjtRQUMvQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFQWixTQUFJLEdBQWlDLHlCQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFRdkUsV0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekIsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLGNBQWMsRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLHlCQUFXLEVBQUUsQ0FBQyxDQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLHlCQUFXLEVBQUUsQ0FBQyxDQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBakJELDRDQWlCQyJ9