"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
function getNS(vt, ns) {
    const vn = vt[ns ? ns : "DEFAULT"];
    assert_1.ok(vn, "No such namespace " + ns);
    return vn;
}
exports.getNS = getNS;
//# sourceMappingURL=getNS.js.map