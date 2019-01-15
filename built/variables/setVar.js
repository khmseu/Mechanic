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
function setVar(vt, varName, varValue) {
    assert_1.ok(vt, "missing VarTree");
    const r = patterns_1.rexParseAsVar.exec(varName);
    assert_1.ok(r, "not a valid var name " + varName);
    const [ns, name] = r;
    const vn = getNS_1.getNS(vt, ns);
    vn[name] = varValue;
}
exports.setVar = setVar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0VmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZhcmlhYmxlcy9zZXRWYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUVILG1DQUE0QjtBQUM1QixtQ0FBZ0M7QUFDaEMseUNBQTJDO0FBSTNDLFNBQWdCLE1BQU0sQ0FBQyxFQUFXLEVBQUUsT0FBZSxFQUFFLFFBQWtCO0lBQ3JFLFdBQUUsQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMxQixNQUFNLENBQUMsR0FBRyx3QkFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxXQUFFLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDO0lBQ3RCLE1BQU0sRUFBRSxHQUFHLGFBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekIsRUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUN2QixDQUFDO0FBUEQsd0JBT0MifQ==