"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTExpansion_1 = require("./ASTExpansion");
const ASTNode_1 = require("./ASTNode");
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLit_1 = require("./ASTNodeLit");
const ASTPos_1 = require("./ASTPos");
const ASTReplace_1 = require("./ASTReplace");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const ASTSlice_1 = require("./ASTSlice");
const logg_1 = require("./logg");
class ASTNodeParamExp extends ASTNode_1.ASTNode {
    constructor(paramexp) {
        super(paramexp);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeParamExp;
        logg_1.logg("ASTNodeParamExp");
        // tslint:disable-next-line:max-line-length
        const { Dollar, Rbrace, Short, Excl, Length, Width, Param, Index, Slice, Repl, Names, Exp, ...rest_paramexp } = paramexp;
        this.Dollar = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Dollar);
        this.Rbrace = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Rbrace);
        this.Short = Short;
        this.Excl = Excl;
        this.Length = Length;
        this.Width = Width;
        this.Param = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, Param);
        this.Index = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, Index);
        this.Slice = ASTSimpleSingle_1.ASTSimpleSingle(ASTSlice_1.ASTSlice, Slice);
        this.Repl = ASTSimpleSingle_1.ASTSimpleSingle(ASTReplace_1.ASTReplace, Repl);
        this.Names = Names;
        this.Exp = ASTSimpleSingle_1.ASTSimpleSingle(ASTExpansion_1.ASTExpansion, Exp);
        this.rest = rest_paramexp;
    }
}
exports.ASTNodeParamExp = ASTNodeParamExp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVBhcmFtRXhwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlUGFyYW1FeHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILGlEQUE4QztBQUM5Qyx1Q0FBb0M7QUFDcEMsMkRBQXdEO0FBQ3hELCtDQUE0QztBQUM1Qyw2Q0FBMEM7QUFDMUMscUNBQWtDO0FBQ2xDLDZDQUEwQztBQUMxQyx1REFBb0Q7QUFDcEQsMkNBQXdDO0FBQ3hDLHlDQUFzQztBQUN0QyxpQ0FBOEI7QUFHOUIsTUFBYSxlQUFnQixTQUFRLGlCQUFPO0lBZTFDLFlBQVksUUFBbUI7UUFDN0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBZlgsU0FBSSxHQUFnQyx5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQWdCckUsV0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEIsMkNBQTJDO1FBQzNDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLGFBQWEsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUN6SCxJQUFJLENBQUMsTUFBTSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLE1BQU0sQ0FBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsTUFBTSxDQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBUyxDQUFDLHVCQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBUyxDQUFDLHFDQUFpQixFQUFFLEtBQUssQ0FBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxtQkFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLEdBQUcsaUNBQWUsQ0FBQyx1QkFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsaUNBQWUsQ0FBQywyQkFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQWxDRCwwQ0FrQ0MifQ==