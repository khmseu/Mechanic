/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { CallbackR } from "./common";
import { DAnalysed } from "./dAnalyse";
import { TMAnalysed } from "./tmAnalyse";

export class RuleObject {
  constructor(
      public targets: TMAnalysed, public dependencies: DAnalysed,
      public recipe: CallbackR) {}
  public matches(target: string): string[]|null {
    const grouplist: string[][] = [];
    this.targets.forEach((element) => {
      const groups = element.match(target);
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
