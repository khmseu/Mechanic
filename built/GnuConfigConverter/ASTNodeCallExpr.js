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
const ASTNodeWord_1 = require("./ASTNodeWord");
const logg_1 = require("./logg");
class ASTNodeCallExpr extends ASTNode_1.ASTNode {
    constructor(callexpr) {
        super(callexpr);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeCallExpr;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeCallExpr];
        logg_1.logg("ASTNodeCallExpr");
        this.Assigns = ASTArray_1.ASTArray(ASTNodeAssign_1.ASTNodeAssign, callexpr.Assigns);
        this.Args = ASTArray_1.ASTArray(ASTNodeWord_1.ASTNodeWord, callexpr.Args);
    }
}
exports.ASTNodeCallExpr = ASTNodeCallExpr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNhbGxFeHByLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlQ2FsbEV4cHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMsbURBQWdEO0FBQ2hELCtDQUE0QztBQUM1QywrQ0FBNEM7QUFDNUMsaUNBQThCO0FBRzlCLE1BQWEsZUFBZ0IsU0FBUSxpQkFBTztJQU0xQyxZQUFZLFFBQW1CO1FBQzdCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQU5YLFNBQUksR0FBZ0MseUJBQVcsQ0FBQyxlQUFlLENBQUM7UUFDaEUsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQU1uRSxXQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFRLENBQUMsNkJBQWEsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBUSxDQUFDLHlCQUFXLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRjtBQVpELDBDQVlDIn0=