"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const analyseDependencySpecs_1 = require("../dependencies/analyseDependencySpecs");
const analyseTargetSpecs_1 = require("../targets/analyseTargetSpecs");
const RuleObject_1 = require("./RuleObject");
/**
 *
 * @param spec
 * @return
 */
function Rule(spec) {
    const t = analyseTargetSpecs_1.analyseTargetSpecs(spec.Targets);
    const d = analyseDependencySpecs_1.analyseDependencySpecs(spec.Dependencies);
    RuleObject_1.rules.push(new RuleObject_1.RuleObject(t, d, spec.Recipe));
}
exports.Rule = Rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9SdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxtRkFBZ0Y7QUFFaEYsc0VBQW1FO0FBR25FLDZDQUFpRDtBQUVqRDs7OztHQUlHO0FBQ0gsU0FBZ0IsSUFBSSxDQUFDLElBQXNGO0lBQ3pHLE1BQU0sQ0FBQyxHQUFHLHVDQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxNQUFNLENBQUMsR0FBRywrQ0FBc0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEQsa0JBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSx1QkFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUpELG9CQUlDIn0=