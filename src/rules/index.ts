/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { CallbackR, DependsSpec, TargetSpec } from "./common";
import { dAnalyse } from "./dAnalyse";
import { RuleObject, rules } from "./RuleObject";
import { tmAnalyse } from "./tmAnalyse";

export const Rule = (spec: {
  Targets: TargetSpec[]; Dependencies: DependsSpec[]; Recipe: CallbackR;
}) => {
  const t = tmAnalyse(spec.Targets);
  const d = dAnalyse(spec.Dependencies);
  rules.push(new RuleObject(t, d, spec.Recipe));
};
