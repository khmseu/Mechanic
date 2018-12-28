/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ITargetDetails } from "./ITargetDetails";
import { ITargetMatcher } from "./ITargetMatcher";
import { parseTargetName } from "./parseTargetName";
import { VarTree } from "../variables/VarTree";
import { VarValue } from "../variables/VarValue";

/**
 * Target string matcher
 */
export class TargetStringMatcher implements ITargetMatcher {
  /**
   * Fp  of target string matcher
   */
  private readonly fp: string[];
  /**
   * Rx  of target string matcher
   */
  private readonly rx: RegExp;
  /**
   * Creates an instance of target string matcher.
   * @param m
   */
  constructor(private readonly m: string) {
    const pr = parseTargetName(m);
    this.fp = m.split("%");
    this.rx = new RegExp(
      this.fp
        .map((v: string) => {
          return [...v]
            .map((c: string) => {
              c.replace(/\W/, "\\$&");
            })
            .join("");
        })
        .join("(.*)"),
    );
  }
  /**
   * Matchs target string matcher
   * @param _
   * @param __
   * @param child
   * @returns match
   */
  public match(_: string, __: string, child: string): ITargetDetails | null {
    return this.rx.exec(child);
  }
  /**
   * Generates target string matcher
   * @param vars
   * @returns generate
   */
  public generate(vars: VarTree): string {
    const n: {
      [vn: string]: VarValue;
    } = vars[""] || {};
    const c: string[] = n.capture as string[];
    let r = "";
    for (let i = 0; i < this.fp.length - 1; i++) {
      r += this.fp[i] + (c[i] || "");
    }
    return r + this.fp[this.fp.length - 1];
  }
  /**
   * To string
   * @returns string
   */
  public toString(): string {
    return this.m;
  }
}
