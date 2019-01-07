/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { getVar } from "../variables/getVar";
import { VarTree } from "../variables/VarTree";
import { IParsedTargetName } from "./IParsedTargetName";
import { ITargetDetails } from "./ITargetDetails";
import { ITargetMatcher } from "./ITargetMatcher";
import { parseTargetName } from "./parseTargetName";

/**
 * Target string matcher
 */
export class TargetStringMatcher implements ITargetMatcher {
  public rx:
    | {
        exec: (arg0: string) => ITargetDetails;
      }
    | undefined;
  public fp: any;
  /**
   * Parsed  of target string matcher
   */
  private parsed: IParsedTargetName;
  /**
   * Creates an instance of target string matcher.
   * @param pattern
   */
  constructor(private readonly pattern: string) {
    this.parsed = parseTargetName(pattern);
  }
  /**
   * Matchs target string matcher
   * @param vars
   * @param _
   * @param __
   * @param child
   * @returns match
   */
  public match(vars: VarTree, _: string, __: string, child: string): ITargetDetails {
    const rex = new RegExp(this.parsed.parts.map((v) => (/^\$/.test(v) ? getVar(vars, v) : v)).join(""));
    return rex.exec(child);
  }
  /**
   * Generates target string matcher
   * @param vars
   * @returns generate
   */
  public generate(vars: VarTree): string {
    return this.parsed.split.map((v) => (/^\$/.test(v) ? getVar(vars, v) : v)).join("");
  }
  /**
   * To string
   * @returns string
   */
  public toString(): string {
    return this.pattern;
  }
}
