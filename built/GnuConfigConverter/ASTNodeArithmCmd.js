"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTNode_1 = require("./ASTNode");
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeArithmCmd extends ASTNode_1.ASTNode {
    constructor(arithmcmd) {
        super(arithmcmd);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeArithmCmd;
        logg_1.logg("ASTNodeArithmCmd");
        const { Left, Right, Unsigned, X, ...rest_arithmcmd } = arithmcmd;
        this.Left = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Left);
        this.Right = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Right);
        this.Unsigned = Unsigned;
        this.X = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, X);
        this.rest = rest_arithmcmd;
    }
}
exports.ASTNodeArithmCmd = ASTNodeArithmCmd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUFyaXRobUNtZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUFyaXRobUNtZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsdUNBQW9DO0FBQ3BDLDJEQUF3RDtBQUN4RCwrQ0FBNEM7QUFDNUMscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsZ0JBQWlCLFNBQVEsaUJBQU87SUFPM0MsWUFBWSxTQUFxQjtRQUMvQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFQWixTQUFJLEdBQWlDLHlCQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFRdkUsV0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekIsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLGNBQWMsRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLElBQUksQ0FBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLHFDQUFpQixFQUFFLENBQUMsQ0FBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQWpCRCw0Q0FpQkMifQ==