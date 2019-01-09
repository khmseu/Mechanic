"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const parseRawName_1 = require("../paths/parseRawName");
const getVar_1 = require("../variables/getVar");
/**
 * Target string matcher
 */
class TargetStringMatcher {
    /**
     * Creates an instance of target string matcher.
     * @param rawName
     */
    constructor(rawName) {
        this.rawName = rawName;
        this.parsed = parseRawName_1.parseRawName(rawName);
    }
    /**
     * Matchs target string matcher
     * @param vars
     * @param _
     * @param __
     * @param child
     * @returns match
     */
    match(vars, _, __, child) {
        const rex = new RegExp(this.parsed.parts.map((v) => (/^\$/.test(v) ? getVar_1.getVar(vars, v) : v)).join(""));
        return rex.exec(child);
    }
    /**
     * Generates target string matcher
     * @param vars
     * @returns generate
     */
    generate(vars) {
        return this.parsed.split.map((v) => (/^\$/.test(v) ? getVar_1.getVar(vars, v) : v)).join("");
    }
    /**
     * To string
     * @returns string
     */
    toString() {
        return this.rawName;
    }
}
exports.TargetStringMatcher = TargetStringMatcher;
//# sourceMappingURL=TargetStringMatcher.js.map