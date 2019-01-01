"use strict";
/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const analyseDependencySpec_1 = require("../dependencies/analyseDependencySpec");
const analyseTargetSpecs_1 = require("../targets/analyseTargetSpecs");
const RuleObject_1 = require("./RuleObject");
/**
 *
 * @param spec
 * @return
 */
function Rule(spec) {
    const t = analyseTargetSpecs_1.analyseTargetSpecs(spec.Targets);
    const d = analyseDependencySpec_1.analyseDependencySpec(spec.Dependencies);
    RuleObject_1.rules.push(new RuleObject_1.RuleObject(t, d, spec.Recipe));
}
exports.Rule = Rule;
//# sourceMappingURL=Rule.js.map