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
//# sourceMappingURL=setVar.js.map