"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const findInPath_1 = require("../paths/findInPath");
/**
 * Rule object
 */
class RuleObject {
    /**
     * Creates an instance of rule object.
     * @param targets
     * @param dependencies
     * @param recipe
     */
    constructor(targets, //
    dependencies, recipe) {
        this.targets = targets;
        this.dependencies = dependencies;
        this.recipe = recipe;
    }
    /**
     * Matches rule object
     * @param wantedTarget
     * @param vars
     * @returns matches
     */
    matches(wantedTarget, vars) {
        const grouplist = [];
        const candidate = findInPath_1.findInPath(wantedTarget);
        this.targets.forEach((element) => {
            const groups = element.match(vars, ...candidate);
            if (groups) {
                grouplist.push(groups);
            }
        });
        if (grouplist.length > 1) {
            throw new Error("Matches for several targets on one rule " + this);
        }
        return grouplist.length ? grouplist[0] : null;
    }
}
exports.RuleObject = RuleObject;
exports.rules = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZU9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9SdWxlT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFHSCxvREFBaUQ7QUFLakQ7O0dBRUc7QUFDSCxNQUFhLFVBQVU7SUFDckI7Ozs7O09BS0c7SUFDSCxZQUNTLE9BQTBCLEVBQUUsRUFBRTtJQUM5QixZQUFxQyxFQUNyQyxNQUFpQjtRQUZqQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBeUI7UUFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUN2QixDQUFDO0lBQ0o7Ozs7O09BS0c7SUFDSSxPQUFPLENBQUMsWUFBb0IsRUFBRSxJQUFhO1FBQ2hELE1BQU0sU0FBUyxHQUFlLEVBQUUsQ0FBQztRQUNqQyxNQUFNLFNBQVMsR0FBRyx1QkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDL0IsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQztZQUNqRCxJQUFJLE1BQU0sRUFBRTtnQkFDVixTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDcEU7UUFDRCxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2hELENBQUM7Q0FDRjtBQWhDRCxnQ0FnQ0M7QUFFWSxRQUFBLEtBQUssR0FBaUIsRUFBRSxDQUFDIn0=