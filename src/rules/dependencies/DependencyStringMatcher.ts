/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { VarTree } from "../variables/VarTree";
import { VarValue } from "../variables/VarValue";
import { IDependencyGenerator } from "./IDependencyGenerator";

/**
 * Dependency string matcher
 */
export class DependencyStringMatcher implements IDependencyGenerator {
  /**
   * Fp  of dependency string matcher
   */
  private readonly fp: string[];

  /**
   * Creates an instance of dependency string matcher.
   * @param d
   */
  constructor(private readonly d: string) {
    this.fp = [];
    this.cn = [];
    xxx;
    const m = /^(\w+):(.*)$/.exec(depend);
    if (m) {
      ret.push({
        ns: m[1],
        name: m[2],
      });
    } else {
      ret.push({
        name: depend,
      });
    }
  }
  /**
   * Generates dependency string matcher
   * @param vars
   * @returns generate
   */
  public generate(vars: VarTree): string[] {
    const n: {
      [vn: string]: VarValue;
    } = vars[""] || {};
    const c: string[] = n.capture as string[];
    let r = "";
    for (let i = 0; i < this.cn.length; i++) {
      r += this.fp[i] + c[this.cn[i]];
    }
    return [r + this.fp[this.cn.length]];
  }
  /**
   * To string
   * @returns string
   */
  public toString(): string {
    return this.d;
  }
}
