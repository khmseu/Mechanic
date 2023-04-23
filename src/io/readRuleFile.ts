/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { equal, ok } from "assert";
import { resolve } from "path";
import { assert } from "typia";
import { NodeVM, NodeVMOptions, VMScript } from "vm2";
import { DependencyGeneratorProxy } from "../dependencies/DependencyGeneratorProxy";
import { IDependencyGeneratorRaw } from "../dependencies/IDependencyGenerator";
import { assertClass } from "../js/assertClass";
import { checkArgs } from "../js/checkArgs";
import { DataFromJS } from "../js/DataFromJS";
import { IRuleArgRaw } from "../rules/IRuleArg";
import { Rule } from "../rules/Rule";
import { ITargetMatcherRaw } from "../targets/ITargetMatcher";
import { TargetMatcherProxy } from "../targets/TargetMatcherProxy";
import { VarTree } from "../variables/VarTree";
import { VarValue } from "../variables/VarValue";

const vmopts: NodeVMOptions = {
  sandbox: {
    /**
     *
     * @param args
     * @return
     */
    Rule: (...args: DataFromJS[]) => {
      checkArgs(1, args);
      const specraw = assert<IRuleArgRaw>(args[0]);
      return Rule({
        Targets: specraw.Targets.map((t) => {
          const tt = assert<string | ITargetMatcherRaw>(t);
          if (typeof tt === "string") {
            return tt;
          } else {
            return new TargetMatcherProxy(tt);
          }
        }),
        Dependencies: specraw.Dependencies.map((d) => {
          const dd = assert<IDependencyGeneratorRaw>(d);
          if (typeof dd === "string") {
            return dd;
          } else {
            return new DependencyGeneratorProxy(dd);
          }
        }),
        Recipe: (vars): any => {
          equal(typeof specraw.Recipe, "function");
          return specraw.Recipe?.call(vars);
        },
      });
    },
    /**
     * Gets var
     *
     * @param args
     * @returns
     */
    getVar: (...args: DataFromJS[]) => {
      checkArgs(2, args);
      ok(
        args[0] instanceof VarTree,
        TypeError("first parameter must be a VarTree")
      );
      const vt = assertClass<VarTree>(VarTree, args[0]);
      const vn = assert<string>(args[1]);
      return vt.getVar(vn);
    },
    /**
     * Sets var
     *
     * @param args
     * @returns
     */
    setVar: (...args: DataFromJS[]) => {
      checkArgs(3, args);
      ok(
        args[0] instanceof VarTree,
        TypeError("first parameter must be a VarTree")
      );
      const vt: VarTree = args[0];
      const vn = assert<string>(args[1]);
      const vv = assert<VarValue>(args[2]);
      return vt.setVar(vn, vv);
    },
  },
  console: "inherit",
  require: {
    builtin: ["*"],
    context: "sandbox",
    external: true,
    root: "./",
  },
  sourceExtensions: ["mechanic"],
};
const vm = new NodeVM(vmopts);
const reqScript = new VMScript(`
module.exports = function(what) {
  require(what);
};
`);
const req: any = vm.run(reqScript);

export const readRuleFile = (dir: string): void => {
  const fn = resolve(dir, "manual.mechanic");
  req(fn);
};
