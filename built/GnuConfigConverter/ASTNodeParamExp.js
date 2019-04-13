"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTExpansion_1 = require("./ASTExpansion");
const ASTMoreParamExp_1 = require("./ASTMoreParamExp");
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
        this.more = new ASTMoreParamExp_1.ASTMoreParamExp();
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
        ["Dollar", "Rbrace"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitASTNodeParamExpPre(this);
        if (this.Param) {
            this.Param.accept(visitor);
        }
        this.Index.accept(visitor);
        visitor.visitASTNodeParamExpPost(this);
    }
}
exports.ASTNodeParamExp = ASTNodeParamExp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVBhcmFtRXhwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlUGFyYW1FeHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILGlEQUE4QztBQUM5Qyx1REFBb0Q7QUFDcEQsdUNBQW9DO0FBQ3BDLDJEQUF3RDtBQUN4RCwrQ0FBNEM7QUFDNUMsNkNBQTBDO0FBRTFDLHFDQUFrQztBQUNsQyw2Q0FBMEM7QUFDMUMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4Qyx5Q0FBc0M7QUFDdEMsaUNBQThCO0FBQzlCLCtDQUE0RDtBQUM1RCxtQ0FBb0M7QUFFcEMsTUFBYSxlQUFnQixTQUFRLGlCQUFPO0lBa0IxQyxZQUFZLFFBQW1CO1FBQzdCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQWxCWCxTQUFJLEdBQWdDLHlCQUFXLENBQUMsZUFBZSxDQUFDO1FBQ2hFLGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUQsU0FBSSxHQUFvQixJQUFJLGlDQUFlLEVBQUUsQ0FBQztRQWlCbkQsV0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcscUJBQVMsQ0FBQyx1QkFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFTLENBQUMscUNBQWlCLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQzNELElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxtQkFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxHQUFHLGlDQUFlLENBQUMsdUJBQVUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLEtBQUssR0FBRyw4QkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFFLENBQUUsUUFBUSxDQUFDLEtBQTBCLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsR0FBRyxHQUFHLGlDQUFlLENBQUMsMkJBQVksRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDakMsTUFBTSxJQUFJLEdBQXVCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxPQUF1QjtRQUNuQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGO0FBaERELDBDQWdEQyJ9