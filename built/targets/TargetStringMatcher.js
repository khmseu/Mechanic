"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const parseTargetName_1 = require("./parseTargetName");
/**
 * Target string matcher
 */
class TargetStringMatcher {
    /**
     * Creates an instance of target string matcher.
     * @param m
     */
    constructor(m) {
        this.m = m;
        const pr = parseTargetName_1.parseTargetName(m);
        this.fp = m.split("%");
        this.rx = new RegExp(this.fp
            .map((v) => {
            return [...v]
                .map((c) => {
                c.replace(/\W/, "\\$&");
            })
                .join("");
        })
            .join("(.*)"));
    }
    /**
     * Matchs target string matcher
     * @param _
     * @param __
     * @param child
     * @returns match
     */
    match(_, __, child) {
        return this.rx.exec(child);
    }
    /**
     * Generates target string matcher
     * @param vars
     * @returns generate
     */
    generate(vars) {
        const n = vars[""] || {};
        const c = n.capture;
        let r = "";
        for (let i = 0; i < this.fp.length - 1; i++) {
            r += this.fp[i] + (c[i] || "");
        }
        return r + this.fp[this.fp.length - 1];
    }
    /**
     * To string
     * @returns string
     */
    toString() {
        return this.m;
    }
}
exports.TargetStringMatcher = TargetStringMatcher;
//# sourceMappingURL=TargetStringMatcher.js.map