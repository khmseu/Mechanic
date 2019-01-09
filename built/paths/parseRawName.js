"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const patterns_1 = require("../variables/patterns");
const VarSet_1 = require("../variables/VarSet");
const rexTestNameIsVar = new RegExp(`^#(${patterns_1.testVar})$`);
const rexSplitVar = new RegExp(`(%|${patterns_1.testVar})`);
/**
 * Parses raw name
 *
 * @param rawName
 * Names consist of literal text interspersed with special sequences
 * - `%` is a wildcard
 * - `${ns:name}` is a variable to interpolate
 * - `${name}` is the same in a default namespace
 * - or the whole string could match `#${ns:name}` or `#${name}` which means the variable itself
 *
 * `ns` and `name` must match `\p{IDS}\p{IDC}*`, unless in the default namespace when `name` can also match `^\d+$`
 *
 * Names matching `\p{Upper}+` are reserved
 *
 * @returns
 */
function parseRawName(rawName) {
    const res = rexTestNameIsVar.exec(rawName);
    if (res) {
        return { vars: new VarSet_1.VarSet(res[0]), split: [], parts: [] };
    }
    const raw = rawName.split(rexSplitVar);
    const parts = [];
    let rs = [];
    const vars = new VarSet_1.VarSet();
    let n = 1;
    const split = [];
    raw.forEach((v) => {
        if (v === "%") {
            rs.push("(.*)");
            split.push(`\${${n++}}`);
        }
        else if (/^\$/.test(v)) {
            vars.add(v);
            const rsj = rs.join("");
            if (rsj.length) {
                parts.push(rsj);
            }
            rs = [];
            parts.push(v);
            split.push(v);
        }
        else if (v.length) {
            rs.push([...v]
                .map((c) => {
                c.replace(/\W/, "\\$&");
            })
                .join(""));
            split.push(v);
        }
    });
    const lastrsj = rs.join("");
    if (lastrsj.length) {
        parts.push(lastrsj);
    }
    return { vars, split, parts };
}
exports.parseRawName = parseRawName;
//# sourceMappingURL=parseRawName.js.map