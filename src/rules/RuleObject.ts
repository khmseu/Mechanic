/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { DependencyGeneratorList } from "../dependencies/DependencyGeneratorList";
import { findInPath } from "../paths/findInPath";
import { TargetMatcherList } from "../targets/TargetMatcherList";
import { VarTree } from "../variables/VarTree";
import { CallbackR } from "./CallbackR";

/**
 * Rule object
 */
export class RuleObject {
  /**
   * Creates an instance of rule object.
   * @param targets
   * @param dependencies
   * @param recipe
   */
  constructor(
    public targets: TargetMatcherList, //
    public dependencies: DependencyGeneratorList,
    public recipe: CallbackR,
  ) {}
  /**
   * Matches rule object
   * @param wantedTarget
   * @param vars
   * @returns matches
   */
  public matches(wantedTarget: string, vars: VarTree): string[] | null {
    const grouplist: string[][] = [];
    const candidate = findInPath(wantedTarget);
    this.targets.forEach((element) => {
      const groups = element.match(vars, ...candidate);
      if (groups) {
        grouplist.push(groups);
      }
    });
    if (grouplist.length > 1) {
      throw new Error("Matches for several targets on one rule " + this);
    }
    return grouplist.length ? grouplist[0] : null;
  }
}

export const rules: RuleObject[] = [];
