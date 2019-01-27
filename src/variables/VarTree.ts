/**
 * Copyright (c) 2018 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ok } from "assert";
import { is } from "typescript-is";
import { CurrentVarValue } from "./CurrentVarValue";
import { IUserVarValue } from "./IUserVarValue";
import { rexParseAsVar } from "./patterns";
import { VarNameSpace } from "./VarNameSpace";
import { VarValue } from "./VarValue";

/**
 * Var tree
 */
export class VarTree {
  /**
   * Vars  of var tree
   */
  private vars: {
    [ns: string]: VarNameSpace | null | undefined | typeof process.env;
  };
  /**
   * Creates an instance of var tree.
   */
  constructor() {
    this.vars = {
      ENV: process.env,
    };
  }
  /**
   * Gets var
   * @param varName
   * @returns var
   */
  public getVar(varName: string): CurrentVarValue {
    const r = rexParseAsVar.exec(varName);
    ok(r, SyntaxError("not a valid var name " + varName));
    const [ns, name] = r!;
    const vn = this.getNS(ns);
    const vv: VarValue = vn![name];
    if (!vv) {
      return vv;
    }
    const vv1 = is<IUserVarValue>(vv) ? vv.toString() : vv;
    return vv1;
  }
  /**
   * Sets var
   * @param varName
   * @param varValue
   */
  public setVar(varName: string, varValue: VarValue): void {
    const r = rexParseAsVar.exec(varName);
    ok(r, SyntaxError("not a valid var name " + varName));
    const [ns, name] = r!;
    const vn = this.getNS(ns);
    vn![name] = varValue;
  }
  /**
   * Gets ns
   * @param ns
   * @returns
   */
  private getNS(ns: string) {
    const vn = this.vars[ns];
    ok(vn, Error("No such namespace " + ns));
    return vn;
  }
}
