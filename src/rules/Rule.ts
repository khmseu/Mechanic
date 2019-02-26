/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { analyseDependencySpecs } from "../dependencies/analyseDependencySpecs";
import { analyseTargetSpecs } from "../targets/analyseTargetSpecs";
import { IRuleArg } from "./IRuleArg";
import { RuleObject, rules } from "./RuleObject";

/**
 *
 * @param   spec
 */
export function Rule(spec: IRuleArg): void {
  const t = analyseTargetSpecs(spec.Targets);
  const d = analyseDependencySpecs(spec.Dependencies);
  rules.push(new RuleObject(t, d, spec.Recipe));
}
