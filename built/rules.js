"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
class TMObject {
    constructor(ns, name) {
        this.ns = ns;
        this.name = name;
    }
    match(target) {
        if (util_1.isFunction(this.name)) {
            return this.name(target);
        }
        else if (util_1.isRegExp(this.name)) {
            return this.name.exec(target);
        }
        else if (typeof (name) === "string") {
            return name === target ? [target] : null;
        }
        else {
            return null;
        }
    }
}
// tslint:disable-next-line:max-classes-per-file
class RuleObject {
    constructor(targets, dependencies, recipe) {
        this.targets = targets;
        this.dependencies = dependencies;
        this.recipe = recipe;
    }
    matches(target) {
        this.targets.forEach((element) => {
            const groups = element.match(target);
        });
        return true;
    }
}
const rules = [];
function tmAnalyse(targets) {
    const ret = [];
    targets.forEach((target) => {
        if (Array.isArray(target)) {
            ret.push(new TMObject(target[0], target[1]));
        }
        else if (util_1.isFunction(target)) {
            ret.push(new TMObject(null, target));
        }
        else if (util_1.isRegExp(target)) {
            ret.push(new TMObject(null, target));
        }
        else if (typeof (target) === "string") {
            const m = /^(\w+):(.*)$/.exec(target);
            if (m) {
                ret.push(new TMObject(m[1], m[2]));
            }
            else {
                ret.push(new TMObject(null, target));
            }
        }
    });
    return ret;
}
function dAnalyse(depends) {
    const ret = [];
    depends.forEach((depend) => {
        if (Array.isArray(depend)) {
            ret.push({
                ns: depend[0],
                name: depend[1],
            });
        }
        else if (util_1.isFunction(depend)) {
            ret.push({
                name: depend,
            });
        }
        else if (typeof (depend) === "string") {
            const m = /^(\w+):(.*)$/.exec(depend);
            if (m) {
                ret.push({
                    ns: m[1],
                    name: m[2],
                });
            }
            else {
                ret.push({
                    name: depend,
                });
            }
        }
    });
    return ret;
}
exports.Rule = (spec) => {
    const t = tmAnalyse(spec.Targets);
    const d = dAnalyse(spec.Dependencies);
    rules.push(new RuleObject(t, d, spec.Recipe));
};
//# sourceMappingURL=rules.js.map