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
        logg_1.logg("ASTNodeBlock");
        const { Lbrace, Rbrace, StmtList, Last, ...rest_block } = block;
        this.Lbrace = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Lbrace);
        this.Rbrace = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Rbrace);
        this.StmtList = ASTSingle_1.ASTSingle(ASTNodeStmtList_1.ASTNodeStmtList, StmtList);
        this.Last = ASTArray_1.ASTArray(ASTNodeComment_1.ASTNodeComment, Last);
        this.rest = rest_block;
    }
}
exports.ASTNodeBlock = ASTNodeBlock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUJsb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1ROb2RlQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILHlDQUFzQztBQUN0Qyx1Q0FBb0M7QUFDcEMscURBQWtEO0FBQ2xELCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQscUNBQWtDO0FBQ2xDLHVEQUFvRDtBQUNwRCwyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsWUFBYSxTQUFRLGlCQUFPO0lBT3ZDLFlBQVksS0FBYTtRQUN2QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFQUixTQUFJLEdBQTZCLHlCQUFXLENBQUMsWUFBWSxDQUFDO1FBUS9ELFdBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyQixNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxNQUFNLEdBQUcsaUNBQWUsQ0FBQyxlQUFNLEVBQUUsTUFBTSxDQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBZSxDQUFDLGVBQU0sRUFBRSxNQUFNLENBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFTLENBQUMsaUNBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFRLENBQUMsK0JBQWMsRUFBRSxJQUFJLENBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztJQUN6QixDQUFDO0NBQ0Y7QUFqQkQsb0NBaUJDIn0=