"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
/**
 * Parses dependency name
 * @param m
 * @returns
 */
function parseDependencyName(m) {
    const fp = m.split(/(%|(?:\$(?:\w+:)?\w+))/);
    const rx = [];
    const vr = [];
    let rs = [];
    fp.map((v) => {
        if (v === "%") {
            rs.push("(.*)");
        }
        else if (/^\$/.test(v)) {
            rx.push(rs.join(""));
            rs = [];
            const [ns, name] = /^\$(?:(\w+):)(\w+)$/.exec(v);
            vr.push({ ns, name });
        }
        else {
            rs.push([...v]
                .map((c) => {
                c.replace(/\W/, "\\$&");
            })
                .join(""));
        }
    });
    rx.push(rs.join(""));
    return { fp, rx, vr };
}
//# sourceMappingURL=parseDependencyName.js.map