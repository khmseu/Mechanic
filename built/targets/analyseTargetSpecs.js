"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyseTargetSpecs = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHlzZVRhcmdldFNwZWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RhcmdldHMvYW5hbHlzZVRhcmdldFNwZWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7O0FBSUgsK0RBQTREO0FBRTVEOzs7O0dBSUc7QUFDSCxTQUFnQixrQkFBa0IsQ0FBQyxPQUF1QjtJQUN4RCxNQUFNLEdBQUcsR0FBc0IsRUFBRSxDQUFDO0lBQ2xDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQ0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ3pCLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSx5Q0FBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFiRCxnREFhQyJ9