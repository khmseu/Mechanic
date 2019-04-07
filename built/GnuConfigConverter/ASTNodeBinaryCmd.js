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
const ParserTypes_1 = require("./ParserTypes");
const Token_1 = require("./Token");
class ASTNodeBinaryCmd extends ASTNode_1.ASTNode {
    constructor(binarycmd) {
        super(binarycmd);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeBinaryCmd;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeBinaryCmd];
        logg_1.logg("ASTNodeBinaryCmd");
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, binarycmd.OpPos);
        this.Op = ParserTypes_1.BinCmdOperator[binarycmd.Op];
        this.OpString = Token_1.op(binarycmd.Op);
        this.X = ASTSingle_1.ASTSingle(ASTNodeStmt_1.ASTNodeStmt, binarycmd.X);
        this.Y = ASTSingle_1.ASTSingle(ASTNodeStmt_1.ASTNodeStmt, binarycmd.Y);
    }
}
exports.ASTNodeBinaryCmd = ASTNodeBinaryCmd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUJpbmFyeUNtZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUJpbmFyeUNtZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1QywrQ0FBNEM7QUFDNUMscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBQzlCLCtDQUEyRDtBQUMzRCxtQ0FBb0M7QUFFcEMsTUFBYSxnQkFBaUIsU0FBUSxpQkFBTztJQVMzQyxZQUFZLFNBQXFCO1FBQy9CLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQVRaLFNBQUksR0FBaUMseUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsRSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFTcEUsV0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLEVBQUUsR0FBRyw0QkFBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQUUsQ0FBRSxTQUFTLENBQUMsRUFBdUIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxDQUFDLEdBQUcscUJBQVMsQ0FBQyx5QkFBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsQ0FBQyxHQUFHLHFCQUFTLENBQUMseUJBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFFLENBQUM7SUFDaEQsQ0FBQztDQUNGO0FBbEJELDRDQWtCQyJ9