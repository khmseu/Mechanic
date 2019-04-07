"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTArray_1 = require("./ASTArray");
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
        logg_1.logg("ASTNodeDeclClause");
        this.Variant = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, declclause.Variant);
        this.Opts = ASTArray_1.ASTArray(ASTNodeWord_1.ASTNodeWord, declclause.Opts);
        this.Assigns = ASTArray_1.ASTArray(ASTNodeAssign_1.ASTNodeAssign, declclause.Assigns);
    }
}
exports.ASTNodeDeclClause = ASTNodeDeclClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZURlY2xDbGF1c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVEZWNsQ2xhdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx5Q0FBc0M7QUFDdEMsdUNBQW9DO0FBQ3BDLG1EQUFnRDtBQUNoRCwrQ0FBNEM7QUFDNUMsNkNBQTBDO0FBQzFDLCtDQUE0QztBQUM1QywyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsaUJBQWtCLFNBQVEsaUJBQU87SUFPNUMsWUFBWSxVQUF1QjtRQUNqQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFQYixTQUFJLEdBQWtDLHlCQUFXLENBQUMsaUJBQWlCLENBQUM7UUFDcEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBT3JFLFdBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQVMsQ0FBQyx1QkFBVSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFRLENBQUMseUJBQVcsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBUSxDQUFDLDZCQUFhLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdELENBQUM7Q0FDRjtBQWRELDhDQWNDIn0=