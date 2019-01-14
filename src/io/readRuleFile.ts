/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { resolve } from "path";
import { NodeVM, NodeVMOptions, VMScript } from "vm2";
import { Rule } from "../rules/Rule";
import { getVar } from "../variables/getVar";
import { setVar } from "../variables/setVar";

const vmopts: NodeVMOptions = {
  console: "inherit",
  sandbox: { Rule, getVar, setVar },
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
