"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyseDependencySpecs = void 0;
const DependencyStringGenerator_1 = require("./DependencyStringGenerator");
/**
 * Analyses dependency spec
 * @param depends
 * @returns dependency spec
 */
function analyseDependencySpecs(depends) {
    const ret = [];
    if (!depends) {
        return ret;
    }
    depends.forEach((depend) => {
        if (typeof depend === "string") {
            ret.push(new DependencyStringGenerator_1.DependencyStringGenerator(depend));
        }
        else {
            ret.push(depend);
        }
    });
    return ret;
}
exports.analyseDependencySpecs = analyseDependencySpecs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHlzZURlcGVuZGVuY3lTcGVjcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZXBlbmRlbmNpZXMvYW5hbHlzZURlcGVuZGVuY3lTcGVjcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7OztBQUlILDJFQUF3RTtBQUV4RTs7OztHQUlHO0FBQ0gsU0FBZ0Isc0JBQXNCLENBQUMsT0FBMkI7SUFDaEUsTUFBTSxHQUFHLEdBQTRCLEVBQUUsQ0FBQztJQUN4QyxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1osT0FBTyxHQUFHLENBQUM7S0FDWjtJQUNELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUN6QixJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUkscURBQXlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBYkQsd0RBYUMifQ==