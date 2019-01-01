"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const pathSearch_1 = require("../io/pathSearch");
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
     * @param target
     * @param vars
     * @returns matches
     */
    matches(target, vars) {
        const grouplist = [];
        this.targets.forEach((element) => {
            const pathvar = element.pathvar;
            const path = vars.PATH[pathvar];
            assert_1.ok(Array.isArray(path), "A Path must be a string list");
            const candidate = pathSearch_1.pathSearch(path, target);
            if (candidate) {
                const matcher = element.matcher;
                const groups = matcher.match(...candidate);
                if (groups) {
                    grouplist.push(groups);
                }
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