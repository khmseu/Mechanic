"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHlzZURlcGVuZGVuY3lTcGVjcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZXBlbmRlbmNpZXMvYW5hbHlzZURlcGVuZGVuY3lTcGVjcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBSUgsMkVBQXdFO0FBRXhFOzs7O0dBSUc7QUFDSCxTQUFnQixzQkFBc0IsQ0FBQyxPQUEyQjtJQUNoRSxNQUFNLEdBQUcsR0FBNEIsRUFBRSxDQUFDO0lBQ3hDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQ0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ3pCLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxxREFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFiRCx3REFhQyJ9