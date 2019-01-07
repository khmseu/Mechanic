"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const patterns_1 = require("./patterns");
const rexParseAsVar = new RegExp(`^${patterns_1.parseVar}$`);
/**
 * Gets var
 * @param vt
 * @param varName
 * @returns var
 */
function getVar(vt, varName) {
    assert_1.ok(vt, "missing VarTree");
    const r = rexParseAsVar.exec(varName);
    assert_1.ok(r, "not a valid var name " + varName);
    const [ns, name] = r;
    const vn = vt[ns ? ns : "DEFAULT"];
    assert_1.ok(vn, "No such namespace " + ns);
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
//# sourceMappingURL=getVar.js.map