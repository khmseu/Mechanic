/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { CallbackR } from "./CallbackR";
import { dAnalyse } from "../dependencies/dAnalyse";
import { DependencySpec } from "../dependencies/DependencySpec";
import { RuleObject, rules } from "./RuleObject";
import { TargetSpec } from "../targets/TargetSpec";
import { tmAnalyse } from "../targets/tmAnalyse";

/**
 *
 * @param spec
 * @return
 */
export function Rule(spec: { Targets: TargetSpec[]; Dependencies: DependencySpec[]; Recipe: CallbackR }): void {
  const t = tmAnalyse(spec.Targets);
  const d = dAnalyse(spec.Dependencies);
  rules.push(new RuleObject(t, d, spec.Recipe));
}
