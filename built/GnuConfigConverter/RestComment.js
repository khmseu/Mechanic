"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const comm_1 = require("./comm");
const STKind_1 = require("./STKind");
class RestComment {
    constructor(thing, dflt = null) {
        this.thing = thing;
        this.dflt = dflt;
        this.kind = STKind_1.STKind.RestComment;
    }
    js() {
        return comm_1.comm(this.thing, this.dflt);
    }
}
exports.RestComment = RestComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdENvbW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR251Q29uZmlnQ29udmVydGVyL1Jlc3RDb21tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxpQ0FBOEI7QUFFOUIscUNBQWtDO0FBRWxDLE1BQWEsV0FBVztJQUV0QixZQUFtQixLQUFhLEVBQVMsT0FBc0IsSUFBSTtRQUFoRCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBc0I7UUFENUQsU0FBSSxHQUF1QixlQUFNLENBQUMsV0FBVyxDQUFDO0lBQ2lCLENBQUM7SUFDaEUsRUFBRTtRQUNQLE9BQU8sV0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FDRjtBQU5ELGtDQU1DIn0=