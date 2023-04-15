"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logg_1 = require("../logg");
const ASTArray_1 = require("./ASTArray");
const ASTNode_1 = require("./ASTNode");
const ASTNodeAssign_1 = require("./ASTNodeAssign");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLit_1 = require("./ASTNodeLit");
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTSingle_1 = require("./ASTSingle");
class ASTNodeDeclClause extends ASTNode_1.ASTNode {
    constructor(declclause, parent, parentField) {
        super(declclause, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeDeclClause;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeDeclClause];
        logg_1.logg("ASTNodeDeclClause");
        this.Variant = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, declclause.Variant, this, "Variant");
        this.Opts = ASTArray_1.ASTArray(ASTNodeWord_1.ASTNodeWord, declclause.Opts, this, "Opts");
        this.Assigns = ASTArray_1.ASTArray(ASTNodeAssign_1.ASTNodeAssign, declclause.Assigns, this, "Assigns");
        ["kind", "parent", "parentField"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPreBefore(this);
        visitor.visitASTNodeDeclClausePre(this);
        visitor.visitAllPreAfter(this);
        if (this.Variant) {
            this.Variant.accept(visitor);
        }
        this.Opts.forEach((e) => e.accept(visitor));
        this.Assigns.forEach((e) => e.accept(visitor));
        visitor.visitAllPostBefore(this);
        visitor.visitASTNodeDeclClausePost(this);
        visitor.visitAllPostAfter(this);
    }
}
exports.ASTNodeDeclClause = ASTNodeDeclClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZURlY2xDbGF1c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL2dlbmVyYXRlZC9BU1ROb2RlRGVjbENsYXVzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsa0NBQStCO0FBRS9CLHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMsbURBQWdEO0FBQ2hELCtDQUE0QztBQUM1Qyw2Q0FBMEM7QUFDMUMsK0NBQTRDO0FBQzVDLDJDQUF3QztBQUd4QyxNQUFhLGlCQUFrQixTQUFRLGlCQUFPO0lBTzVDLFlBQVksVUFBdUIsRUFBUyxNQUFzQixFQUFTLFdBQW1CO1FBQzVGLEtBQUssQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBREcsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQU52RixTQUFJLEdBQWtDLHlCQUFXLENBQUMsaUJBQWlCLENBQUM7UUFDcEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBT3JFLFdBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQVMsQ0FBQyx1QkFBVSxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQVEsQ0FBQyx5QkFBVyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQVEsQ0FBQyw2QkFBYSxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVFLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUM5QyxNQUFNLElBQUksR0FBdUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLE9BQXVCO1FBQ25DLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7QUFoQ0QsOENBZ0NDIn0=