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
class ASTExpansion {
    constructor(expansion) {
        logg_1.logg("ASTExpansion");
        const { Op, Word, ...rest_expansion } = expansion;
        this.Op = Op;
        this.Word = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, Word);
        this.rest = rest_expansion;
    }
}
exports.ASTExpansion = ASTExpansion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNURXhwYW5zaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9BU1RFeHBhbnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILCtDQUE0QztBQUM1QywyQ0FBd0M7QUFDeEMsaUNBQThCO0FBRzlCLE1BQWEsWUFBWTtJQUt2QixZQUFZLFNBQXNCO1FBQ2hDLFdBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyQixNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLGNBQWMsRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUNsRCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyx5QkFBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQVpELG9DQVlDIn0=