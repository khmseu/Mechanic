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
//# sourceMappingURL=RuleObject.js.map