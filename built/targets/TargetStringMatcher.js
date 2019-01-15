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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFyZ2V0U3RyaW5nTWF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXJnZXRzL1RhcmdldFN0cmluZ01hdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOztBQUdILHdEQUFxRDtBQUNyRCxnREFBNkM7QUFLN0M7O0dBRUc7QUFDSCxNQUFhLG1CQUFtQjtJQUs5Qjs7O09BR0c7SUFDSCxZQUE2QixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLDJCQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNEOzs7Ozs7O09BT0c7SUFDSSxLQUFLLENBQUMsSUFBYSxFQUFFLENBQVMsRUFBRSxFQUFVLEVBQUUsS0FBYTtRQUM5RCxNQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNEOzs7O09BSUc7SUFDSSxRQUFRLENBQUMsSUFBYTtRQUMzQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUF2Q0Qsa0RBdUNDIn0=