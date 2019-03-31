"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
exports.debug = true;
function logg(thing) {
    // tslint:disable-next-line:no-console
    if (exports.debug) {
        // tslint:disable-next-line:no-console
        console.log(util_1.inspect(thing, {
            depth: 2,
            compact: false,
            sorted: true,
        }));
    }
}
exports.logg = logg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvbG9nZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsK0JBQStCO0FBRWxCLFFBQUEsS0FBSyxHQUFHLElBQUksQ0FBQztBQUUxQixTQUFnQixJQUFJLENBQUMsS0FBVTtJQUM3QixzQ0FBc0M7SUFDdEMsSUFBSSxhQUFLLEVBQUU7UUFDVCxzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FDVCxjQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2IsS0FBSyxFQUFFLENBQUM7WUFDUixPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUNILENBQUM7S0FDSDtBQUNILENBQUM7QUFaRCxvQkFZQyJ9