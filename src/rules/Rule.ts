/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { analyseDependencySpec } from "../dependencies/analyseDependencySpec";
import { DependencySpecList } from "../dependencies/DependencySpecList";
import { analyseTargetSpecs } from "../targets/analyseTargetSpecs";
import { TargetSpecList } from "../targets/TargetSpecList";
import { CallbackR } from "./CallbackR";
import { RuleObject, rules } from "./RuleObject";

/**
 *
 * @param spec
 * @return
 */
export function Rule(spec: { Targets: TargetSpecList; Dependencies: DependencySpecList; Recipe: CallbackR }): void {
  const t = analyseTargetSpecs(spec.Targets);
  const d = analyseDependencySpec(spec.Dependencies);
  rules.push(new RuleObject(t, d, spec.Recipe));
}
