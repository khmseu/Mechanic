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
 * Dependency string matcher
 */
class DependencyStringGenerator {
    /**
     * Creates an instance of dependency string generator.
     * @param rawName
     */
    constructor(rawName) {
        this.rawName = rawName;
        this.parsed = parseRawName_1.parseRawName(rawName);
    }
    /**
     * Generates dependency string matcher
     * @param vars
     * @returns generate
     */
    generate(vars) {
        return [this.parsed.split.map((v) => (/^\$/.test(v) ? getVar_1.getVar(vars, v) : v)).join("")];
    }
    /**
     * To string
     * @returns string
     */
    toString() {
        return this.rawName;
    }
}
exports.DependencyStringGenerator = DependencyStringGenerator;
//# sourceMappingURL=DependencyStringGenerator.js.map