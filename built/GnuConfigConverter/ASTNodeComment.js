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
const ASTPos_1 = require("./ASTPos");
const ASTSimpleSingle_1 = require("./ASTSimpleSingle");
const logg_1 = require("./logg");
class ASTNodeComment extends ASTNode_1.ASTNode {
    constructor(comment) {
        super(comment);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeComment;
        logg_1.logg("ASTNodeComment");
        const { Hash, Text, ...rest_comment } = comment;
        this.Hash = ASTSimpleSingle_1.ASTSimpleSingle(ASTPos_1.ASTPos, Hash);
        this.Text = Text;
        this.rest = rest_comment;
    }
}
exports.ASTNodeComment = ASTNodeComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZUNvbW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVDb21tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx1Q0FBb0M7QUFDcEMsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUNsQyx1REFBb0Q7QUFDcEQsaUNBQThCO0FBRzlCLE1BQWEsY0FBZSxTQUFRLGlCQUFPO0lBS3pDLFlBQVksT0FBaUI7UUFDM0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBTFYsU0FBSSxHQUErQix5QkFBVyxDQUFDLGNBQWMsQ0FBQztRQU1uRSxXQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN2QixNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLGlDQUFlLENBQUMsZUFBTSxFQUFFLElBQUksQ0FBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQWJELHdDQWFDIn0=