"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.logg = exports.debug = void 0;
const console_1 = require("console");
const util_1 = require("util");
exports.debug = true;
const logg = (thing) => {
    if (exports.debug) {
        (0, console_1.log)((0, util_1.inspect)(thing, {
            compact: false,
            depth: 2,
            sorted: true,
        }));
    }
};
exports.logg = logg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvbG9nZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7OztBQUVILHFDQUE4QjtBQUM5QiwrQkFBK0I7QUFFbEIsUUFBQSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBRW5CLE1BQU0sSUFBSSxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7SUFDakMsSUFBSSxhQUFLLEVBQUU7UUFDVCxJQUFBLGFBQUcsRUFDRCxJQUFBLGNBQU8sRUFBQyxLQUFLLEVBQUU7WUFDYixPQUFPLEVBQUUsS0FBSztZQUNkLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDLENBQ0gsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFDO0FBVlcsUUFBQSxJQUFJLFFBVWYifQ==