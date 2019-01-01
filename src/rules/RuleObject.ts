/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ok } from "assert";
import { pathSearch } from "../io/pathSearch";
import { DependencyGeneratorList } from "../dependencies/DependencyGeneratorList";
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
   * @param target
   * @param vars
   * @returns matches
   */
  public matches(target: string, vars: VarTree): string[] | null {
    const grouplist: string[][] = [];
    this.targets.forEach((element) => {
      const pathvar = element.pathvar;
      const path = vars.PATH![pathvar] as string[];
      ok(Array.isArray(path), "A Path must be a string list");
      const candidate = pathSearch(path, target);
      if (candidate) {
        const matcher = element.matcher;
        const groups = matcher.match(...candidate);
        if (groups) {
          grouplist.push(groups);
        }
      }
    });
    if (grouplist.length > 1) {
      throw new Error("Matches for several targets on one rule " + this);
    }
    return grouplist.length ? grouplist[0] : null;
  }
}

export const rules: RuleObject[] = [];
