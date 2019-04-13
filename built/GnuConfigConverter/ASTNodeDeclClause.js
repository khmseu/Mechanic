"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTArray_1 = require("./ASTArray");
const ASTMoreDeclClause_1 = require("./ASTMoreDeclClause");
const ASTNode_1 = require("./ASTNode");
const ASTNodeAssign_1 = require("./ASTNodeAssign");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeLit_1 = require("./ASTNodeLit");
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeDeclClause extends ASTNode_1.ASTNode {
    constructor(declclause) {
        super(declclause);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeDeclClause;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeDeclClause];
        this.more = new ASTMoreDeclClause_1.ASTMoreDeclClause();
        logg_1.logg("ASTNodeDeclClause");
        this.Variant = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, declclause.Variant);
        this.Opts = ASTArray_1.ASTArray(ASTNodeWord_1.ASTNodeWord, declclause.Opts);
        this.Assigns = ASTArray_1.ASTArray(ASTNodeAssign_1.ASTNodeAssign, declclause.Assigns);
        [].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitASTNodeDeclClausePre(this);
        if (this.Variant) {
            this.Variant.accept(visitor);
        }
        this.Opts.forEach((e) => e.accept(visitor));
        this.Assigns.forEach((e) => e.accept(visitor));
        visitor.visitASTNodeDeclClausePost(this);
    }
}
exports.ASTNodeDeclClause = ASTNodeDeclClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZURlY2xDbGF1c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVEZWNsQ2xhdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx5Q0FBc0M7QUFDdEMsMkRBQXdEO0FBQ3hELHVDQUFvQztBQUNwQyxtREFBZ0Q7QUFDaEQsK0NBQTRDO0FBQzVDLDZDQUEwQztBQUUxQywrQ0FBNEM7QUFDNUMsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUc5QixNQUFhLGlCQUFrQixTQUFRLGlCQUFPO0lBUTVDLFlBQVksVUFBdUI7UUFDakMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBUmIsU0FBSSxHQUFrQyx5QkFBVyxDQUFDLGlCQUFpQixDQUFDO1FBQ3BFLGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRSxTQUFJLEdBQXNCLElBQUkscUNBQWlCLEVBQUUsQ0FBQztRQU92RCxXQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFTLENBQUMsdUJBQVUsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBUSxDQUFDLHlCQUFXLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQVEsQ0FBQyw2QkFBYSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRCxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDZixNQUFNLElBQUksR0FBdUIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLE9BQXVCO1FBQ25DLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQTdCRCw4Q0E2QkMifQ==