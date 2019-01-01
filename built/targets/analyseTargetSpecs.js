"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TargetStringMatcher_1 = require("./TargetStringMatcher");
/**
 * Analyses target specs
 * @param targets
 * @returns target specs
 */
function analyseTargetSpecs(targets) {
    const ret = [];
    targets.forEach((target) => {
        if (Array.isArray(target)) {
            const [n, m] = target;
            ret.push({ pathvar: n, matcher: typeof m === "string" ? new TargetStringMatcher_1.TargetStringMatcher(m) : m });
        }
        else if (typeof target === "string") {
            const m = /^(\w+):(.*)$/.exec(target);
            if (m) {
                ret.push({ pathvar: m[1], matcher: new TargetStringMatcher_1.TargetStringMatcher(m[2]) });
            }
            else {
                ret.push({ pathvar: "", matcher: new TargetStringMatcher_1.TargetStringMatcher(target) });
            }
        }
        else {
            ret.push({ pathvar: "", matcher: target });
        }
    });
    return ret;
}
exports.analyseTargetSpecs = analyseTargetSpecs;
//# sourceMappingURL=analyseTargetSpecs.js.map