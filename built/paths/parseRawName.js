"use strict";
/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRawName = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VSYXdOYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhdGhzL3BhcnNlUmF3TmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7OztBQUVILG9EQUFnRDtBQUNoRCxnREFBNkM7QUFHN0MsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLGtCQUFPLElBQUksQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sa0JBQU8sR0FBRyxDQUFDLENBQUM7QUFDakQ7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBQ0gsU0FBZ0IsWUFBWSxDQUFDLE9BQWU7SUFDMUMsTUFBTSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLElBQUksR0FBRyxFQUFFO1FBQ1AsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLGVBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUMzRDtJQUNELE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO0lBQzNCLElBQUksRUFBRSxHQUFhLEVBQUUsQ0FBQztJQUN0QixNQUFNLElBQUksR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0lBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQztJQUMzQixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ2IsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO2FBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDZCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pCO1lBQ0QsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNSLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Y7YUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsRUFBRSxDQUFDLElBQUksQ0FDTCxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNILEdBQUcsQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFO2dCQUNqQixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUNaLENBQUM7WUFDRixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Y7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1FBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDckI7SUFDRCxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUNoQyxDQUFDO0FBeENELG9DQXdDQyJ9