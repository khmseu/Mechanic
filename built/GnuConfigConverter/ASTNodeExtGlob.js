"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTMoreExtGlob_1 = require("./ASTMoreExtGlob");
const ASTNode_1 = require("./ASTNode");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLit_1 = require("./ASTNodeLit");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
const ParserTypes_1 = require("./ParserTypes");
const Token_1 = require("./Token");
class ASTNodeExtGlob extends ASTNode_1.ASTNode {
    constructor(extglob) {
        super(extglob);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeExtGlob;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeExtGlob];
        this.more = new ASTMoreExtGlob_1.ASTMoreExtGlob();
        logg_1.logg("ASTNodeExtGlob");
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, extglob.OpPos);
        this.Op = ParserTypes_1.GlobOperator[extglob.Op];
        this.OpString = Token_1.op(extglob.Op);
        this.Pattern = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, extglob.Pattern);
        ["OpPos"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitASTNodeExtGlobPre(this);
        if (this.Pattern) {
            this.Pattern.accept(visitor);
        }
        visitor.visitASTNodeExtGlobPost(this);
    }
}
exports.ASTNodeExtGlob = ASTNodeExtGlob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUV4dEdsb2IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVFeHRHbG9iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxxREFBa0Q7QUFDbEQsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1Qyw2Q0FBMEM7QUFFMUMscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBQzlCLCtDQUF1RDtBQUN2RCxtQ0FBb0M7QUFFcEMsTUFBYSxjQUFlLFNBQVEsaUJBQU87SUFTekMsWUFBWSxPQUFpQjtRQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFUVixTQUFJLEdBQStCLHlCQUFXLENBQUMsY0FBYyxDQUFDO1FBQzlELGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0QsU0FBSSxHQUFtQixJQUFJLCtCQUFjLEVBQUUsQ0FBQztRQVFqRCxXQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsRUFBRSxHQUFHLDBCQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBRSxDQUFFLE9BQU8sQ0FBQyxFQUF1QixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBUyxDQUFDLHVCQUFVLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdEIsTUFBTSxJQUFJLEdBQXVCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxPQUF1QjtRQUNuQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRjtBQTdCRCx3Q0E2QkMifQ==