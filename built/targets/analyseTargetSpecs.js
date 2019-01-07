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
        if (typeof target === "string") {
            ret.push(new TargetStringMatcher_1.TargetStringMatcher(target));
        }
        else {
            ret.push(target);
        }
    });
    return ret;
}
exports.analyseTargetSpecs = analyseTargetSpecs;
//# sourceMappingURL=analyseTargetSpecs.js.map