"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
        logg_1.logg("ASTNodeExtGlob");
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, extglob.OpPos);
        this.Op = ParserTypes_1.GlobOperator[extglob.Op];
        this.OpString = Token_1.op(extglob.Op);
        this.Pattern = ASTSingle_1.ASTSingle(ASTNodeLit_1.ASTNodeLit, extglob.Pattern);
    }
}
exports.ASTNodeExtGlob = ASTNodeExtGlob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUV4dEdsb2IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVFeHRHbG9iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBb0M7QUFDcEMsK0NBQTRDO0FBQzVDLDZDQUEwQztBQUMxQyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFDOUIsK0NBQXVEO0FBQ3ZELG1DQUFvQztBQUVwQyxNQUFhLGNBQWUsU0FBUSxpQkFBTztJQVF6QyxZQUFZLE9BQWlCO1FBQzNCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQVJWLFNBQUksR0FBK0IseUJBQVcsQ0FBQyxjQUFjLENBQUM7UUFDOUQsZUFBVSxHQUFXLHlCQUFXLENBQUMseUJBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQVFsRSxXQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsRUFBRSxHQUFHLDBCQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBRSxDQUFFLE9BQU8sQ0FBQyxFQUF1QixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBUyxDQUFDLHVCQUFVLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDRjtBQWhCRCx3Q0FnQkMifQ==