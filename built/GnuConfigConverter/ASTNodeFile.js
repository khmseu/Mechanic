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
const ASTNodeComment_1 = require("./ASTNodeComment");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeStmtList_1 = require("./ASTNodeStmtList");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeFile extends ASTNode_1.ASTNode {
    constructor(file) {
        super(file);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeFile;
        logg_1.logg("ASTNodeFile");
        const { Name, StmtList, Last, ...rest_file } = file;
        this.Name = Name;
        this.StmtList = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, StmtList);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, Last);
        this.rest = rest_file;
    }
}
exports.ASTNodeFile = ASTNodeFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVGaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx5Q0FBc0M7QUFDdEMsdUNBQW9DO0FBQ3BDLHFEQUFrRDtBQUNsRCwrQ0FBNEM7QUFDNUMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxXQUFZLFNBQVEsaUJBQU87SUFNdEMsWUFBWSxJQUFXO1FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQU5QLFNBQUksR0FBNEIseUJBQVcsQ0FBQyxXQUFXLENBQUM7UUFPN0QsV0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFTLENBQUMsaUNBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxJQUFJLENBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFmRCxrQ0FlQyJ9