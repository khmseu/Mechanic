"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = void 0;
const analyseDependencySpecs_1 = require("../dependencies/analyseDependencySpecs");
const analyseTargetSpecs_1 = require("../targets/analyseTargetSpecs");
const RuleObject_1 = require("./RuleObject");
/**
 *
 * @param   spec
 */
function Rule(spec) {
    const t = (0, analyseTargetSpecs_1.analyseTargetSpecs)(spec.Targets);
    const d = (0, analyseDependencySpecs_1.analyseDependencySpecs)(spec.Dependencies);
    RuleObject_1.rules.push(new RuleObject_1.RuleObject(t, d, spec.Recipe));
}
exports.Rule = Rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9SdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7O0FBRUgsbUZBQWdGO0FBQ2hGLHNFQUFtRTtBQUVuRSw2Q0FBaUQ7QUFFakQ7OztHQUdHO0FBQ0gsU0FBZ0IsSUFBSSxDQUFDLElBQWM7SUFDakMsTUFBTSxDQUFDLEdBQUcsSUFBQSx1Q0FBa0IsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsTUFBTSxDQUFDLEdBQUcsSUFBQSwrQ0FBc0IsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEQsa0JBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSx1QkFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUpELG9CQUlDIn0=