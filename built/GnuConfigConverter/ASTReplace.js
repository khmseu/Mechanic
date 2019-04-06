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
class ASTReplace {
    constructor(replace) {
        logg_1.logg("ASTReplace");
        const { All, Orig, With, ...rest_replace } = replace;
        this.All = All;
        this.Orig = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, Orig);
        this.With = ASTSingle_1.ASTSingle(ASTNodeWord_1.ASTNodeWord, With);
        this.rest = rest_replace;
    }
}
exports.ASTReplace = ASTReplace;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVNUUmVwbGFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvQVNUUmVwbGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsK0NBQTRDO0FBQzVDLDJDQUF3QztBQUN4QyxpQ0FBOEI7QUFHOUIsTUFBYSxVQUFVO0lBTXJCLFlBQVksT0FBa0I7UUFDNUIsV0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25CLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyx5QkFBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcscUJBQVMsQ0FBQyx5QkFBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQWRELGdDQWNDIn0=