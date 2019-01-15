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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VSYXdOYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhdGhzL3BhcnNlUmF3TmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsb0RBQWdEO0FBQ2hELGdEQUE2QztBQUc3QyxNQUFNLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sa0JBQU8sSUFBSSxDQUFDLENBQUM7QUFDdkQsTUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxrQkFBTyxHQUFHLENBQUMsQ0FBQztBQUNqRDs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxTQUFnQixZQUFZLENBQUMsT0FBZTtJQUMxQyxNQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsSUFBSSxHQUFHLEVBQUU7UUFDUCxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksZUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO0tBQzNEO0lBQ0QsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxNQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7SUFDM0IsSUFBSSxFQUFFLEdBQWEsRUFBRSxDQUFDO0lBQ3RCLE1BQU0sSUFBSSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7SUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDYixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDMUI7YUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUNkLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDakI7WUFDRCxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ1IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDZjthQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNuQixFQUFFLENBQUMsSUFBSSxDQUNMLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUU7Z0JBQ2pCLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQztpQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQ1osQ0FBQztZQUNGLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDZjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDbEIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNyQjtJQUNELE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ2hDLENBQUM7QUF4Q0Qsb0NBd0NDIn0=