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
    if (!targets) {
        return ret;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHlzZVRhcmdldFNwZWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RhcmdldHMvYW5hbHlzZVRhcmdldFNwZWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFJSCwrREFBNEQ7QUFFNUQ7Ozs7R0FJRztBQUNILFNBQWdCLGtCQUFrQixDQUFDLE9BQXVCO0lBQ3hELE1BQU0sR0FBRyxHQUFzQixFQUFFLENBQUM7SUFDbEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFDRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDekIsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLHlDQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQWJELGdEQWFDIn0=