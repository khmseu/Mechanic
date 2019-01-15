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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVwZW5kZW5jeVN0cmluZ0dlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZXBlbmRlbmNpZXMvRGVwZW5kZW5jeVN0cmluZ0dlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBR0gsd0RBQXFEO0FBQ3JELGdEQUE2QztBQUs3Qzs7R0FFRztBQUNILE1BQWEseUJBQXlCO0lBTXBDOzs7T0FHRztJQUNILFlBQTZCLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsMkJBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLFFBQVEsQ0FBQyxJQUFhO1FBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUE1QkQsOERBNEJDIn0=