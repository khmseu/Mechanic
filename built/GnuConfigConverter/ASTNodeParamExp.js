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
const ParserTypes_1 = require("./ParserTypes");
const Token_1 = require("./Token");
class ASTNodeParamExp extends ASTNode_1.ASTNode {
    constructor(paramexp) {
        super(paramexp);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeParamExp;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeParamExp];
        logg_1.logg("ASTNodeParamExp");
        this.Dollar = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, paramexp.Dollar);
        this.Rbrace = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, paramexp.Rbrace);
        this.Short = paramexp.Short;
        this.Excl = paramexp.Excl;
        this.Length = paramexp.Length;
        this.Width = paramexp.Width;
        this.Param = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, paramexp.Param);
        this.Index = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, paramexp.Index);
        this.Slice = ASTSimpleSingle_1.ASTSimpleSingle(ASTSlice_1.ASTSlice, paramexp.Slice);
        this.Repl = ASTSimpleSingle_1.ASTSimpleSingle(ASTReplace_1.ASTReplace, paramexp.Repl);
        this.Names = ParserTypes_1.ParNamesOperator[paramexp.Names];
        this.NamesString = Token_1.op(paramexp.Names);
        this.Exp = ASTSimpleSingle_1.ASTSimpleSingle(ASTExpansion_1.ASTExpansion, paramexp.Exp);
    }
}
exports.ASTNodeParamExp = ASTNodeParamExp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVBhcmFtRXhwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlUGFyYW1FeHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILGlEQUE4QztBQUM5Qyx1Q0FBb0M7QUFDcEMsMkRBQXdEO0FBQ3hELCtDQUE0QztBQUM1Qyw2Q0FBMEM7QUFDMUMscUNBQWtDO0FBQ2xDLDZDQUEwQztBQUMxQyx1REFBb0Q7QUFDcEQsMkNBQXdDO0FBQ3hDLHlDQUFzQztBQUN0QyxpQ0FBOEI7QUFDOUIsK0NBQTREO0FBQzVELG1DQUFvQztBQUVwQyxNQUFhLGVBQWdCLFNBQVEsaUJBQU87SUFpQjFDLFlBQVksUUFBbUI7UUFDN0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBakJYLFNBQUksR0FBZ0MseUJBQVcsQ0FBQyxlQUFlLENBQUM7UUFDaEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQWlCbkUsV0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcscUJBQVMsQ0FBQyx1QkFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFTLENBQUMscUNBQWlCLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQzNELElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxtQkFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxHQUFHLGlDQUFlLENBQUMsdUJBQVUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLEtBQUssR0FBRyw4QkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFFLENBQUUsUUFBUSxDQUFDLEtBQTBCLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsR0FBRyxHQUFHLGlDQUFlLENBQUMsMkJBQVksRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNGO0FBbENELDBDQWtDQyJ9