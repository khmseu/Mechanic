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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HbnVDb25maWdDb252ZXJ0ZXIvY29tbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsK0JBQStCO0FBQy9CLHVDQUFvQztBQUNwQyxpQ0FBK0I7QUFFL0IsU0FBZ0IsSUFBSSxDQUFDLEtBQWEsRUFBRSxPQUFzQixJQUFJO0lBQzVELE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztJQUN0QixtQ0FBbUM7SUFDbkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixJQUFJLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDekMsT0FBTyxFQUFFLENBQUM7S0FDWDtTQUFNO1FBQ0wsNkJBQTZCO0tBQzlCO0lBQ0QsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUNuQixJQUFJLFlBQUssRUFBRTtZQUNULEVBQUUsR0FBRyxjQUFPLENBQUMsS0FBSyxFQUFFO2dCQUNsQixLQUFLLEVBQUUsQ0FBQztnQkFDUixXQUFXLEVBQUUsTUFBTTthQUNwQixDQUFDLENBQUM7U0FDSjtLQUNGO0lBQ0QsT0FBTyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxHQUFHLE1BQU0sR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDO0FBQ2hFLENBQUM7QUFsQkQsb0JBa0JDIn0=