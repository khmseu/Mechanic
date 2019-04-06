"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ParserTypes_1 = require("./ParserTypes");
const STKind_1 = require("./STKind");
const Token_1 = require("./Token");
class Xxx {
    constructor() {
        this.kind = STKind_1.STKind.Xxx;
    }
}
exports.Xxx = Xxx;
const a = ParserTypes_1.ParNamesOperator[ParserTypes_1.ParNamesOperator.NamesPrefix];
const b = Token_1.Token[ParserTypes_1.ParNamesOperator.NamesPrefix];
const c = Token_1.op(ParserTypes_1.ParNamesOperator.NamesPrefix);
console.log({ a, b, c });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWHh4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0dudUNvbmZpZ0NvbnZlcnRlci9YeHgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUdILCtDQUFpRDtBQUNqRCxxQ0FBa0M7QUFDbEMsbUNBQW9DO0FBRXBDLE1BQWEsR0FBRztJQUFoQjtRQUNTLFNBQUksR0FBZSxlQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3ZDLENBQUM7Q0FBQTtBQUZELGtCQUVDO0FBRUQsTUFBTSxDQUFDLEdBQUcsOEJBQWdCLENBQUMsOEJBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekQsTUFBTSxDQUFDLEdBQUcsYUFBSyxDQUFDLDhCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzlDLE1BQU0sQ0FBQyxHQUFHLFVBQUUsQ0FBRSw4QkFBZ0IsQ0FBQyxXQUFnQyxDQUFDLENBQUM7QUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyJ9