"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTMoreBinaryArithm_1 = require("./ASTMoreBinaryArithm");
const ASTNode_1 = require("./ASTNode");
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
const ParserTypes_1 = require("./ParserTypes");
const Token_1 = require("./Token");
class ASTNodeBinaryArithm extends ASTNode_1.ASTNode {
    constructor(binaryarithm) {
        super(binaryarithm);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeBinaryArithm;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeBinaryArithm];
        this.more = new ASTMoreBinaryArithm_1.ASTMoreBinaryArithm();
        logg_1.logg("ASTNodeBinaryArithm");
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, binaryarithm.OpPos);
        this.Op = ParserTypes_1.BinAritOperator[binaryarithm.Op];
        this.OpString = Token_1.op(binaryarithm.Op);
        this.X = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, binaryarithm.X);
        this.Y = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, binaryarithm.Y);
        ["OpPos"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitASTNodeBinaryArithmPre(this);
        this.X.accept(visitor);
        this.Y.accept(visitor);
        visitor.visitASTNodeBinaryArithmPost(this);
    }
}
exports.ASTNodeBinaryArithm = ASTNodeBinaryArithm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUJpbmFyeUFyaXRobS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUJpbmFyeUFyaXRobS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsK0RBQTREO0FBQzVELHVDQUFvQztBQUNwQywyREFBd0Q7QUFDeEQsK0NBQTRDO0FBRTVDLHFDQUFrQztBQUNsQyx1REFBb0Q7QUFDcEQsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUM5QiwrQ0FBK0Q7QUFDL0QsbUNBQW9DO0FBRXBDLE1BQWEsbUJBQW9CLFNBQVEsaUJBQU87SUFVOUMsWUFBWSxZQUEyQjtRQUNyQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFWZixTQUFJLEdBQW9DLHlCQUFXLENBQUMsbUJBQW1CLENBQUM7UUFDeEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2xFLFNBQUksR0FBd0IsSUFBSSx5Q0FBbUIsRUFBRSxDQUFDO1FBUzNELFdBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxFQUFFLEdBQUcsNkJBQWUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFFLENBQUUsWUFBWSxDQUFDLEVBQXVCLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsQ0FBQyxHQUFHLHFCQUFTLENBQUMscUNBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxDQUFDLEdBQUcscUJBQVMsQ0FBQyxxQ0FBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFFLENBQUM7UUFDdkQsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN0QixNQUFNLElBQUksR0FBdUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLE9BQXVCO1FBQ25DLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBOUJELGtEQThCQyJ9