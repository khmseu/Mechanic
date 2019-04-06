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
const ASTNodeStmt_1 = require("./ASTNodeStmt");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const logg_1 = require("./logg");
class ASTNodeProcSubst extends ASTNode_1.ASTNode {
    constructor(procsubst) {
        super(procsubst);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeProcSubst;
        logg_1.logg("ASTNodeProcSubst");
        const { OpPos, Rparen, Op, Stmts, Last, ...rest_procsubst } = procsubst;
        this.OpPos = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, OpPos);
        this.Rparen = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Rparen);
        this.Op = Op;
        this.Stmts = ASTArray_1.ASTArray(ASTNodeStmt_1.ASTNodeStmt, Stmts);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, Last);
        this.rest = rest_procsubst;
    }
}
exports.ASTNodeProcSubst = ASTNodeProcSubst;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVByb2NTdWJzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUTm9kZVByb2NTdWJzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgseUNBQXNDO0FBQ3RDLHVDQUFvQztBQUNwQyxxREFBa0Q7QUFDbEQsK0NBQTRDO0FBQzVDLCtDQUE0QztBQUM1QyxxQ0FBa0M7QUFDbEMsdURBQW9EO0FBQ3BELGlDQUE4QjtBQUc5QixNQUFhLGdCQUFpQixTQUFRLGlCQUFPO0lBUTNDLFlBQVksU0FBcUI7UUFDL0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBUlosU0FBSSxHQUFpQyx5QkFBVyxDQUFDLGdCQUFnQixDQUFDO1FBU3ZFLFdBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsY0FBYyxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxLQUFLLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxNQUFNLENBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQVEsQ0FBQyx5QkFBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQVEsQ0FBQywrQkFBYyxFQUFFLElBQUksQ0FBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQW5CRCw0Q0FtQkMifQ==