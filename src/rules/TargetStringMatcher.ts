/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ITargetDetails } from "./ITargetDetails";
import { ITargetMatcher } from "./ITargetMatcher";
import { parseTargetName } from "./parseTargetName";
import { VarTree } from "./VarTree";
import { VarValue } from "./VarValue";
export class TargetStringMatcher implements ITargetMatcher {
  private readonly fp: string[];
  private readonly rx: RegExp;
  constructor(private readonly m: string) {
    const pr = parseTargetName(m);
    this.fp = m.split("%");
    this.rx = new RegExp(this.fp
      .map((v: string) => {
        return [ ...v ]
          .map((c: string) => {
            c.replace(/\W/, "\\$&");
          })
          .join("");
      })
      .join("(.*)"));
  }
  public match(_: string, __: string, child: string): ITargetDetails | null {
    return this.rx.exec(child);
  }
  public generate(vars: VarTree): string {
    const n: {
      [ vn: string ]: VarValue;
    } = vars[ "" ] || {};
    const c: string[] = n.capture as string[];
    let r = "";
    for (let i = 0; i < this.fp.length - 1; i++) {
      r += this.fp[ i ] + (c[ i ] || "");
    }
    return r + this.fp[ this.fp.length - 1 ];
  }
  public toString(): string {
    return this.m;
  }
}
