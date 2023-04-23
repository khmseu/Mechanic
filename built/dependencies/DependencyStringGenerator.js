"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyStringGenerator = void 0;
const parseRawName_1 = require("../paths/parseRawName");
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
        this.parsed = (0, parseRawName_1.parseRawName)(rawName);
    }
    /**
     * Generates dependency string matcher
     * @param vars
     * @returns generate
     */
    generate(vars) {
        return [this.parsed.split.map((v) => (/^\$/.test(v) ? vars.getVar(v) : v)).join("")];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVwZW5kZW5jeVN0cmluZ0dlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZXBlbmRlbmNpZXMvRGVwZW5kZW5jeVN0cmluZ0dlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7OztBQUdILHdEQUFxRDtBQUtyRDs7R0FFRztBQUNILE1BQWEseUJBQXlCO0lBTXBDOzs7T0FHRztJQUNILFlBQTZCLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBQSwyQkFBWSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksUUFBUSxDQUFDLElBQWE7UUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFDRDs7O09BR0c7SUFDSSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQTVCRCw4REE0QkMifQ==