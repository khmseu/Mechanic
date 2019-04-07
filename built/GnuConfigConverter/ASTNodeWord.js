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
const ASTnodeKind_1 = require("./ASTnodeKind");
const ASTNodeWordPart_1 = require("./ASTNodeWordPart");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
class ASTNodeWord extends ASTNode_1.ASTNode {
    constructor(word) {
        super(word);
        this.kind = ASTnodeKind_1.ASTnodeKind.ASTNodeWord;
        this.kindString = ASTnodeKind_1.ASTnodeKind[ASTnodeKind_1.ASTnodeKind.ASTNodeWord];
        logg_1.logg("ASTNodeWord");
        this.Parts = ASTArray_1.ASTArray(ASTNodeWordPart_1.ASTNodeWordPart, word.Parts);
        this.SplitBraces = word.SplitBraces ? ASTSingle_1.ASTSingle(ASTNodeWord, word.SplitBraces()) : null;
        this.Lit = word.Lit ? word.Lit() : null;
    }
}
exports.ASTNodeWord = ASTNodeWord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVdvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVXb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx5Q0FBc0M7QUFDdEMsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUc5QixNQUFhLFdBQVksU0FBUSxpQkFBTztJQU90QyxZQUFZLElBQVc7UUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBUFAsU0FBSSxHQUE0Qix5QkFBVyxDQUFDLFdBQVcsQ0FBQztRQUN4RCxlQUFVLEdBQVcseUJBQVcsQ0FBQyx5QkFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBTy9ELFdBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFRLENBQUMsaUNBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3hGLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDMUMsQ0FBQztDQUNGO0FBZEQsa0NBY0MifQ==