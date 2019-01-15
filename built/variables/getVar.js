"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const getNS_1 = require("./getNS");
const patterns_1 = require("./patterns");
/**
 * Gets var
 * @param vt
 * @param varName
 * @returns var
 */
function getVar(vt, varName) {
    assert_1.ok(vt, "missing VarTree");
    const r = patterns_1.rexParseAsVar.exec(varName);
    assert_1.ok(r, "not a valid var name " + varName);
    const [ns, name] = r;
    const vn = getNS_1.getNS(vt, ns);
    let vv = vn[name];
    if (!vv) {
        return vv;
    }
    if (typeof vv === "object") {
        vv = vv.toString();
    }
    assert_1.ok(!vv || typeof vv === "string", "cannot convert var to string " + varName);
    return vv;
}
exports.getVar = getVar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZhcmlhYmxlcy9nZXRWYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILG1DQUE0QjtBQUU1QixtQ0FBZ0M7QUFDaEMseUNBQTJDO0FBSTNDOzs7OztHQUtHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFDLEVBQVcsRUFBRSxPQUFlO0lBQ2pELFdBQUUsQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMxQixNQUFNLENBQUMsR0FBRyx3QkFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxXQUFFLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDO0lBQ3RCLE1BQU0sRUFBRSxHQUFHLGFBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekIsSUFBSSxFQUFFLEdBQWEsRUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDUCxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRLEVBQUU7UUFDMUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNwQjtJQUNELFdBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRLEVBQUUsK0JBQStCLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDN0UsT0FBTyxFQUFxQixDQUFDO0FBQy9CLENBQUM7QUFmRCx3QkFlQyJ9