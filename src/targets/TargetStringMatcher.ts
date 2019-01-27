/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { IParsedName } from "../paths/IParsedName";
import { parseRawName } from "../paths/parseRawName";
import { VarTree } from "../variables/VarTree";
import { ITargetDetails } from "./ITargetDetails";
import { ITargetMatcher } from "./ITargetMatcher";

/**
 * Target string matcher
 */
export class TargetStringMatcher implements ITargetMatcher {
  /**
   * Parsed  of target string matcher
   */
  private parsed: IParsedName;
  /**
   * Creates an instance of target string matcher.
   * @param rawName
   */
  constructor(private readonly rawName: string) {
    this.parsed = parseRawName(rawName);
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
    const rex = new RegExp(this.parsed.parts.map((v) => (/^\$/.test(v) ? vars.getVar(v) : v)).join(""));
    return rex.exec(child);
  }
  /**
   * Generates target string matcher
   * @param vars
   * @returns generate
   */
  public generate(vars: VarTree): string {
    return this.parsed.split.map((v) => (/^\$/.test(v) ? vars.getVar(v) : v)).join("");
  }
  /**
   * To string
   * @returns string
   */
  public toString(): string {
    return this.rawName;
  }
}
