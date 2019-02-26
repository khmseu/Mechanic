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
 * @param   spec
 */
function Rule(spec) {
    const t = analyseTargetSpecs_1.analyseTargetSpecs(spec.Targets);
    const d = analyseDependencySpecs_1.analyseDependencySpecs(spec.Dependencies);
    RuleObject_1.rules.push(new RuleObject_1.RuleObject(t, d, spec.Recipe));
}
exports.Rule = Rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9SdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7QUFFSCxtRkFBZ0Y7QUFDaEYsc0VBQW1FO0FBRW5FLDZDQUFpRDtBQUVqRDs7O0dBR0c7QUFDSCxTQUFnQixJQUFJLENBQUMsSUFBYztJQUNqQyxNQUFNLENBQUMsR0FBRyx1Q0FBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsTUFBTSxDQUFDLEdBQUcsK0NBQXNCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BELGtCQUFLLENBQUMsSUFBSSxDQUFDLElBQUksdUJBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFKRCxvQkFJQyJ9