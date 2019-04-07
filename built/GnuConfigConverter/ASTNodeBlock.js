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
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeBlock extends ASTNode_1.ASTNode {
    constructor(block) {
        super(block);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeBlock;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeBlock];
        logg_1.logg("ASTNodeBlock");
        this.Lbrace = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, block.Lbrace);
        this.Rbrace = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, block.Rbrace);
        this.StmtList = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, block.StmtList);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, block.Last);
    }
}
exports.ASTNodeBlock = ASTNodeBlock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUJsb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsWUFBYSxTQUFRLGlCQUFPO0lBUXZDLFlBQVksS0FBYTtRQUN2QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFSUixTQUFJLEdBQTZCLHlCQUFXLENBQUMsWUFBWSxDQUFDO1FBQzFELGVBQVUsR0FBVyx5QkFBVyxDQUFDLHlCQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFRaEUsV0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQVMsQ0FBQyxpQ0FBZSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFFLENBQUM7SUFDcEQsQ0FBQztDQUNGO0FBaEJELG9DQWdCQyJ9