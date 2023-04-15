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
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLit_1 = require("./ASTNodeLit");
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingleNotNull_1 = require("./ASTSimpleSingleNotNull");
const ASTSingle_1 = require("./ASTSingle");
class ASTNodeRedirect extends ASTNode_1.ASTNode {
    constructor(redirect, parent, parentField) {
        super(redirect, parent, parentField);
        this.parent = parent;
        this.parentField = parentField;
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeRedirect;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeRedirect];
        logg_1.logg("ASTNodeRedirect");
        this.OpPos = ASTSimpleSingleNotNull_1.ASTSimpleSingleNotNull(ASTPos_1.ASTPos, redirect.OpPos);
        this.Op = ParserTypes_1.RedirOperator[redirect.Op];
        this.OpString = Token_1.op(redirect.Op);
        this.N = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, redirect.N, this, "N");
        this.Word = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, redirect.Word, this, "Word");
        this.Hdoc = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, redirect.Hdoc, this, "Hdoc");
        ["kind", "parent", "parentField", "OpPos"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitAllPreBefore(this);
        visitor.visitASTNodeRedirectPre(this);
        visitor.visitAllPreAfter(this);
        if (this.N) {
            this.N.accept(visitor);
        }
        if (this.Word) {
            this.Word.accept(visitor);
        }
        if (this.Hdoc) {
            this.Hdoc.accept(visitor);
        }
        visitor.visitAllPostBefore(this);
        visitor.visitASTNodeRedirectPost(this);
        visitor.visitAllPostAfter(this);
    }
}
exports.ASTNodeRedirect = ASTNodeRedirect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVJlZGlyZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9nZW5lcmF0ZWQvQVNUTm9kZVJlZGlyZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxrQ0FBK0I7QUFDL0IsZ0RBQTBEO0FBQzFELG9DQUFxQztBQUNyQyx1Q0FBb0M7QUFDcEMsK0NBQTRDO0FBQzVDLDZDQUEwQztBQUMxQywrQ0FBNEM7QUFDNUMscUNBQWtDO0FBQ2xDLHFFQUFrRTtBQUNsRSwyQ0FBd0M7QUFHeEMsTUFBYSxlQUFnQixTQUFRLGlCQUFPO0lBVTFDLFlBQVksUUFBbUIsRUFBUyxNQUFzQixFQUFTLFdBQW1CO1FBQ3hGLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBREMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQVRuRixTQUFJLEdBQWdDLHlCQUFXLENBQUMsZUFBZSxDQUFDO1FBQ2hFLGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFVbkUsV0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRywrQ0FBc0IsQ0FBQyxlQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxFQUFFLEdBQUcsMkJBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFFLENBQUUsUUFBUSxDQUFDLEVBQXVCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsQ0FBQyxHQUFHLHFCQUFTLENBQUMsdUJBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMseUJBQVcsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMseUJBQVcsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3ZELE1BQU0sSUFBSSxHQUF1QixNQUFNLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxNQUFNLENBQUMsT0FBdUI7UUFDbkMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBMUNELDBDQTBDQyJ9