"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Dependency string matcher
 */
class DependencyStringGenerator {
    /**
     * Creates an instance of dependency string matcher.
     * @param d
     */
    constructor(d) {
        this.d = d;
        this.fp = [];
        this.cn = [];
        xxx;
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
    /**
     * Generates dependency string matcher
     * @param vars
     * @returns generate
     */
    generate(vars) {
        const n = vars[""] || {};
        const c = n.capture;
        let r = "";
        for (let i = 0; i < this.cn.length; i++) {
            r += this.fp[i] + c[this.cn[i]];
        }
        return [r + this.fp[this.cn.length]];
    }
    /**
     * To string
     * @returns string
     */
    toString() {
        return this.d;
    }
}
exports.DependencyStringGenerator = DependencyStringGenerator;
//# sourceMappingURL=DependencyStringGenerator.js.map