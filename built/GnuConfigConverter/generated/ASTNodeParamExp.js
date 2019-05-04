"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("../logg");
const ParserTypes_1 = require("../ParserTypes");
const Token_1 = require("../Token");
const ASTExpansion_1 = require("./ASTExpansion");
const ASTMoreParamExp_1 = require("./ASTMoreParamExp");
const ASTNode_1 = require("./ASTNode");
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLit_1 = require("./ASTNodeLit");
const ASTPos_1 = require("./ASTPos");
const ASTReplace_1 = require("./ASTReplace");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
const ASTSingle_1 = require("./ASTSingle");
const ASTSlice_1 = require("./ASTSlice");
class ASTNodeParamExp extends ASTNode_1.ASTNode {
    constructor(paramexp, parent, parentField) {
        super(paramexp, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeParamExp;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeParamExp];
        this.more = new ASTMoreParamExp_1.ASTMoreParamExp();
        logg_1.logg("ASTNodeParamExp");
        this.Dollar = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, paramexp.Dollar);
        this.Rbrace = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, paramexp.Rbrace);
        this.Short = paramexp.Short;
        this.Excl = paramexp.Excl;
        this.Length = paramexp.Length;
        this.Width = paramexp.Width;
        this.Param = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, paramexp.Param, this, "Param");
        this.Index = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, paramexp.Index, this, "Index");
        this.Slice = ASTSimpleSingle_1.ASTSimpleSingle(ASTSlice_1.ASTSlice, paramexp.Slice);
        this.Repl = ASTSimpleSingle_1.ASTSimpleSingle(ASTReplace_1.ASTReplace, paramexp.Repl);
        this.Names = paramexp.Names ? ParserTypes_1.ParNamesOperator[paramexp.Names] : null;
        this.NamesString = paramexp.Names ? Token_1.op(paramexp.Names) : null;
        this.Exp = ASTSimpleSingle_1.ASTSimpleSingle(ASTExpansion_1.ASTExpansion, paramexp.Exp);
        ["kind", "parent", "parentField", "Dollar", "Rbrace"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPre(this);
        visitor.visitASTNodeParamExpPre(this);
        if (this.Param) {
            this.Param.accept(visitor);
        }
        if (this.Index) {
            this.Index.accept(visitor);
        }
        visitor.visitASTNodeParamExpPost(this);
        visitor.visitAllPost(this);
    }
}
exports.ASTNodeParamExp = ASTNodeParamExp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVBhcmFtRXhwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9nZW5lcmF0ZWQvQVNUTm9kZVBhcmFtRXhwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxrQ0FBK0I7QUFDL0IsZ0RBQTZEO0FBQzdELG9DQUFxQztBQUNyQyxpREFBOEM7QUFDOUMsdURBQW9EO0FBQ3BELHVDQUFvQztBQUNwQywyREFBd0Q7QUFDeEQsK0NBQTRDO0FBQzVDLDZDQUEwQztBQUMxQyxxQ0FBa0M7QUFDbEMsNkNBQTBDO0FBQzFDLHVEQUFvRDtBQUNwRCxxRUFBa0U7QUFDbEUsMkNBQXdDO0FBQ3hDLHlDQUFzQztBQUd0QyxNQUFhLGVBQWdCLFNBQVEsaUJBQU87SUFrQjFDLFlBQVksUUFBbUIsRUFBUyxNQUFzQixFQUFTLFdBQW1CO1FBQ3hGLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBREMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQWpCbkYsU0FBSSxHQUFnQyx5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQUNoRSxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlELFNBQUksR0FBb0IsSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFpQm5ELFdBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsK0NBQXNCLENBQUMsZUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLCtDQUFzQixDQUFDLGVBQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcscUJBQVMsQ0FBQyx1QkFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUcscUJBQVMsQ0FBQyxxQ0FBaUIsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFlLENBQUMsbUJBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLElBQUksR0FBRyxpQ0FBZSxDQUFDLHVCQUFVLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsOEJBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFFLENBQUUsUUFBUSxDQUFDLEtBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3BGLElBQUksQ0FBQyxHQUFHLEdBQUcsaUNBQWUsQ0FBQywyQkFBWSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNsRSxNQUFNLElBQUksR0FBdUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLE9BQXVCO1FBQ25DLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFwREQsMENBb0RDIn0=