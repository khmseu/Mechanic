"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ASTNodeWord_1 = require("./ASTNodeWord");
const ASTSingle_1 = require("./ASTSingle");
const logg_1 = require("./logg");
const ParserTypes_1 = require("./ParserTypes");
const Token_1 = require("./Token");
class ASTExpansion {
    constructor(expansion) {
        logg_1.logg("ASTExpansion");
        this.Op = ParserTypes_1.ParExpOperator[expansion.Op];
        this.OpString = Token_1.op(expansion.Op);
        this.Word = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, expansion.Word);
    }
}
exports.ASTExpansion = ASTExpansion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNURXhwYW5zaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1RFeHBhbnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILCtDQUE0QztBQUM1QywyQ0FBd0M7QUFDeEMsaUNBQThCO0FBQzlCLCtDQUE0RDtBQUM1RCxtQ0FBb0M7QUFFcEMsTUFBYSxZQUFZO0lBS3ZCLFlBQVksU0FBc0I7UUFDaEMsV0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsNEJBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFFLENBQUUsU0FBUyxDQUFDLEVBQXVCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFTLENBQUMseUJBQVcsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGO0FBWEQsb0NBV0MifQ==