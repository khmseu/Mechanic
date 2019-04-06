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
        logg_1.logg("ASTNodeWord");
        const { Parts, SplitBraces, Lit, ...rest_word } = word;
        this.Parts = ASTArray_1.ASTArray(ASTNodeWordPart_1.ASTNodeWordPart, Parts);
        this.SplitBraces = ASTSingle_1.ASTSingle(ASTNodeWord, SplitBraces());
        this.Lit = Lit();
        this.rest = rest_word;
    }
}
exports.ASTNodeWord = ASTNodeWord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUTm9kZVdvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL0FTVE5vZGVXb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCx5Q0FBc0M7QUFDdEMsdUNBQW9DO0FBQ3BDLCtDQUE0QztBQUM1Qyx1REFBb0Q7QUFDcEQsMkNBQXdDO0FBQ3hDLGlDQUE4QjtBQUc5QixNQUFhLFdBQVksU0FBUSxpQkFBTztJQU10QyxZQUFZLElBQVc7UUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBTlAsU0FBSSxHQUE0Qix5QkFBVyxDQUFDLFdBQVcsQ0FBQztRQU83RCxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEIsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUcsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQVEsQ0FBQyxpQ0FBZSxFQUFFLEtBQUssQ0FBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcscUJBQVMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQWZELGtDQWVDIn0=