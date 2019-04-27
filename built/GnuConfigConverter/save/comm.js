"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const __stack_1 = require("./__stack");
const logg_1 = require("./logg");
function comm(thing, dflt = null) {
    const stk = __stack_1.__stack();
    //  logg(stk[2].getFunctionName());
    let js = JSON.stringify(thing);
    if (js === dflt || (!dflt && js === "{}")) {
        return "";
    }
    else {
        // logg({ thing: js, dflt });
    }
    if (js.length > 200) {
        if (logg_1.debug) {
            js = util_1.inspect(thing, {
                depth: 2,
                breakLength: 999999,
            });
        }
    }
    return "/*" + stk[2].getFunctionName() + " -> " + js + "*/\n";
}
exports.comm = comm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvc2F2ZS9jb21tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCwrQkFBK0I7QUFDL0IsdUNBQW9DO0FBQ3BDLGlDQUErQjtBQUUvQixTQUFnQixJQUFJLENBQUMsS0FBYSxFQUFFLE9BQXNCLElBQUk7SUFDNUQsTUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0lBQ3RCLG1DQUFtQztJQUNuQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLElBQUksRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRTtRQUN6QyxPQUFPLEVBQUUsQ0FBQztLQUNYO1NBQU07UUFDTCw2QkFBNkI7S0FDOUI7SUFDRCxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQ25CLElBQUksWUFBSyxFQUFFO1lBQ1QsRUFBRSxHQUFHLGNBQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xCLEtBQUssRUFBRSxDQUFDO2dCQUNSLFdBQVcsRUFBRSxNQUFNO2FBQ3BCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7SUFDRCxPQUFPLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLEdBQUcsTUFBTSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUM7QUFDaEUsQ0FBQztBQWxCRCxvQkFrQkMifQ==