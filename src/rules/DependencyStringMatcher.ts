/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { IDependencyGenerator } from "./IDependencyGenerator";
import { VarTree } from "./VarTree";
import { VarValue } from "./VarValue";
export class DependencyStringMatcher implements IDependencyGenerator {
  private readonly fp: string[];
  private readonly cn: number[];
  constructor(private readonly d: string) {
    this.fp = [];
    this.cn = [];
    xxx;
    const m = /^(\w+):(.*)$/.exec(depend);
    if (m) {
      ret.push({
        ns: m[ 1 ],
        name: m[ 2 ],
      });
    } else {
      ret.push({
        name: depend,
      });
    }
  }
  public generate(vars: VarTree): string[] {
    const n: {
      [ vn: string ]: VarValue;
    } = vars[ "" ] || {};
    const c: string[] = n.capture as string[];
    let r = "";
    for (let i = 0; i < this.cn.length; i++) {
      r += this.fp[ i ] + c[ this.cn[ i ] ];
    }
    return [ r + this.fp[ this.cn.length ] ];
  }
  public toString(): string {
    return this.d;
  }
}
