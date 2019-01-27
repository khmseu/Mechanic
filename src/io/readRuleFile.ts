/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ok } from "assert";
import { resolve } from "path";
import { assertType } from "typescript-is";
import { NodeVM, NodeVMOptions, VMScript } from "vm2";
import { Rule } from "../rules/Rule";
import { VarTree } from "../variables/VarTree";
import { VarValue } from "../variables/VarValue";

function jsGetVar(...args: any[]) {
  ok(args.length === 2, Error("getVar must have 2 parameters"));
  ok(args[0] instanceof VarTree, TypeError("first parameter must be a VarTree"));
  const vt: VarTree = args[0];
  const vn = assertType<string>(args[1]);
  return (vt as VarTree).getVar(vn as string);
}
function jsSetVar(...args: any) {
  ok(args.length === 3, Error("setVar must have 3 parameters"));
  ok(args[0] instanceof VarTree, TypeError("first parameter must be a VarTree"));
  const vt: VarTree = args[0];
  const vn = assertType<string>(args[1]);
  const vv = assertType<VarValue>(args[2]);
  return vt.setVar(vn, vv);
}

const vmopts: NodeVMOptions = {
  console: "inherit",
  sandbox: { Rule, getVar: jsGetVar, setVar: jsSetVar },
  require: {
    external: true,
    builtin: ["*"],
    root: "./",
    context: "sandbox",
  },
  sourceExtensions: ["mechanic"],
};
const vm = new NodeVM(vmopts);
const reqScript = new VMScript(`
module.exports = function(what) {
  require(what);
};
`);
const req = vm.run(reqScript);

export function readRuleFile(dir: string): void {
  const fn = resolve(dir, "manual.mechanic");
  req(fn);
}
