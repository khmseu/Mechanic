"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTArray_1 = require("./ASTArray");
const ASTMoreBlock_1 = require("./ASTMoreBlock");
const ASTNode_1 = require("./ASTNode");
const ASTNodeComment_1 = require("./ASTNodeComment");
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeStmtList_1 = require("./ASTNodeStmtList");
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeBlock extends ASTNode_1.ASTNode {
    constructor(block) {
        super(block);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeBlock;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeBlock];
        this.more = new ASTMoreBlock_1.ASTMoreBlock();
        logg_1.logg("ASTNodeBlock");
        this.Lbrace = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, block.Lbrace);
        this.Rbrace = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, block.Rbrace);
        this.StmtList = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, block.StmtList);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, block.Last);
        ["Lbrace", "Rbrace"].forEach((f) => {
            const desc = Object.getOwnPropertyDescriptor(this, f);
            desc.enumerable = false;
            Object.defineProperty(this, f, desc);
        });
    }
    accept(visitor) {
        visitor.visitASTNodeBlockPre(this);
        if (this.StmtList) {
            this.StmtList.accept(visitor);
        }
        this.Last.forEach((e) => e.accept(visitor));
        visitor.visitASTNodeBlockPost(this);
    }
}
exports.ASTNodeBlock = ASTNodeBlock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUJsb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHlDQUFzQztBQUN0QyxpREFBOEM7QUFDOUMsdUNBQW9DO0FBQ3BDLHFEQUFrRDtBQUNsRCwrQ0FBNEM7QUFDNUMsdURBQW9EO0FBRXBELHFDQUFrQztBQUNsQyx1REFBb0Q7QUFDcEQsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUc5QixNQUFhLFlBQWEsU0FBUSxpQkFBTztJQVN2QyxZQUFZLEtBQWE7UUFDdkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBVFIsU0FBSSxHQUE2Qix5QkFBVyxDQUFDLFlBQVksQ0FBQztRQUMxRCxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNELFNBQUksR0FBaUIsSUFBSSwyQkFBWSxFQUFFLENBQUM7UUFRN0MsV0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQVMsQ0FBQyxpQ0FBZSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDbEQsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDakMsTUFBTSxJQUFJLEdBQXVCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyxPQUF1QjtRQUNuQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBOUJELG9DQThCQyJ9