"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTMoreAssign_1 = require("./ASTMoreAssign");
const ASTNode_1 = require("./ASTNode");
const ASTNodeArithmExpr_1 = require("./ASTNodeArithmExpr");
const ASTNodeArrayExpr_1 = require("./ASTNodeArrayExpr");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLit_1 = require("./ASTNodeLit");
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeAssign extends ASTNode_1.ASTNode {
    constructor(assign) {
        super(assign);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeAssign;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeAssign];
        this.more = new ASTMoreAssign_1.ASTMoreAssign();
        logg_1.logg("ASTNodeAssign");
        this.Append = assign.Append;
        this.Naked = assign.Naked;
        this.Name = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, assign.Name);
        this.Index = ASTSingle_1.ASTSingle(ASTNodeArithmExpr_1.ASTNodeArithmExpr, assign.Index);
        this.Value = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, assign.Value);
        this.Array = ASTSingle_1.ASTSingle(ASTNodeArrayExpr_1.ASTNodeArrayExpr, assign.Array);
        [].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitASTNodeAssignPre(this);
        if (this.Name) {
            this.Name.accept(visitor);
        }
        this.Index.accept(visitor);
        if (this.Value) {
            this.Value.accept(visitor);
        }
        if (this.Array) {
            this.Array.accept(visitor);
        }
        visitor.visitASTNodeAssignPost(this);
    }
}
exports.ASTNodeAssign = ASTNodeAssign;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUFzc2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZUFzc2lnbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsbURBQWdEO0FBQ2hELHVDQUFvQztBQUNwQywyREFBd0Q7QUFDeEQseURBQXNEO0FBQ3RELCtDQUE0QztBQUM1Qyw2Q0FBMEM7QUFFMUMsK0NBQTRDO0FBQzVDLDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxhQUFjLFNBQVEsaUJBQU87SUFXeEMsWUFBWSxNQUFlO1FBQ3pCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQVhULFNBQUksR0FBOEIseUJBQVcsQ0FBQyxhQUFhLENBQUM7UUFDNUQsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RCxTQUFJLEdBQWtCLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBVS9DLFdBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyx1QkFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFTLENBQUMscUNBQWlCLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcscUJBQVMsQ0FBQyx5QkFBVyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFTLENBQUMsbUNBQWdCLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNmLE1BQU0sSUFBSSxHQUF1QixNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxNQUFNLENBQUMsT0FBdUI7UUFDbkMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUI7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUF4Q0Qsc0NBd0NDIn0=