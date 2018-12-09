/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ITargetDetails, ITargetMatcher, TargetSpec, VarTree } from "./common";

class StringMatcher implements ITargetMatcher {
  private readonly fp: string[];
  private readonly rx: RegExp;
  constructor(private readonly m: string) {
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
  public match(_: string, __: string, child: string): ITargetDetails | null {
    return this.rx.exec(child);
  }
  public generate(vars: VarTree): string {
    const n: { [vn: string]: string | undefined } = vars[""] || {};
    let r = "";
    for (let i = 0; i < this.fp.length; i++) {
      r += this.fp[i] + (n["$" + i] || "");
    }
    return r;
  }
  public toString(): string {
    return this.m;
  }
}

export type TMAnalysed = Array<{ pathvar: string; matcher: ITargetMatcher }>;

export function tmAnalyse(targets: TargetSpec[]): TMAnalysed {
  const ret: TMAnalysed = [];
  targets.forEach((target) => {
    if (Array.isArray(target)) {
      const [n, m] = target;
      ret.push({ pathvar: n, matcher: typeof m === "string" ? new StringMatcher(m) : m });
    } else if (typeof target === "string") {
      const m = /^(\w+):(.*)$/.exec(target);
      if (m) {
        ret.push({ pathvar: m[1], matcher: new StringMatcher(m[2]) });
      } else {
        ret.push({ pathvar: "", matcher: new StringMatcher(target) });
      }
    } else {
      ret.push({ pathvar: "", matcher: target });
    }
  });
  return ret;
}
