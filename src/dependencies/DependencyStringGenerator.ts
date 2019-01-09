/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { IParsedName } from "../paths/IParsedName";
import { parseRawName } from "../paths/parseRawName";
import { getVar } from "../variables/getVar";
import { VarTree } from "../variables/VarTree";
import { DependencyList } from "./DependencyList";
import { IDependencyGenerator } from "./IDependencyGenerator";

/**
 * Dependency string matcher
 */
export class DependencyStringGenerator implements IDependencyGenerator {
  /**
   * Parsed  of dependency string generator
   */
  private parsed: IParsedName;

  /**
   * Creates an instance of dependency string generator.
   * @param rawName
   */
  constructor(private readonly rawName: string) {
    this.parsed = parseRawName(rawName);
  }
  /**
   * Generates dependency string matcher
   * @param vars
   * @returns generate
   */
  public generate(vars: VarTree): DependencyList {
    return [this.parsed.split.map((v) => (/^\$/.test(v) ? getVar(vars, v) : v)).join("")];
  }
  /**
   * To string
   * @returns string
   */
  public toString(): string {
    return this.rawName;
  }
}
