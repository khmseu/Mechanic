"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetStringMatcher = void 0;
const parseRawName_1 = require("../paths/parseRawName");
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
        this.parsed = (0, parseRawName_1.parseRawName)(rawName);
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
        const rex = new RegExp(this.parsed.parts.map((v) => (/^\$/.test(v) ? vars.getVar(v) : v)).join(""));
        return rex.exec(child);
    }
    /**
     * Generates target string matcher
     * @param vars
     * @returns generate
     */
    generate(vars) {
        return this.parsed.split.map((v) => (/^\$/.test(v) ? vars.getVar(v) : v)).join("");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFyZ2V0U3RyaW5nTWF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXJnZXRzL1RhcmdldFN0cmluZ01hdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztHQUtHOzs7QUFHSCx3REFBcUQ7QUFLckQ7O0dBRUc7QUFDSCxNQUFhLG1CQUFtQjtJQUs5Qjs7O09BR0c7SUFDSCxZQUE2QixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUEsMkJBQVksRUFBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Q7Ozs7Ozs7T0FPRztJQUNJLEtBQUssQ0FBQyxJQUFhLEVBQUUsQ0FBUyxFQUFFLEVBQVUsRUFBRSxLQUFhO1FBQzlELE1BQU0sR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLFFBQVEsQ0FBQyxJQUFhO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFDRDs7O09BR0c7SUFDSSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQXZDRCxrREF1Q0MifQ==